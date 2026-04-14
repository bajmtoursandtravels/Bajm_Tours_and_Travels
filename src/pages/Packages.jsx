import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PackageCard from '../components/PackageCard';
import packagesData from '../data/packages.json';
import './Packages.css';
import { useLang } from '../i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Packages = () => {
  const [filter, setFilter] = useState('All');
  const headerRef = useRef(null);
  const { t } = useLang();

  const categories = [
    { value: 'All', label: t('packages.all') },
    { value: 'Hajj', label: t('packages.hajj') },
    { value: 'Umrah', label: t('packages.umrah') },
  ];
  const filtered = filter === 'All' ? packagesData : packagesData.filter(p => p.category === filter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.packages-page-header > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.all-packages-grid .package-card', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    });
    return () => ctx.revert();
  }, [filter]);

  return (
    <div className="packages-page">
      <section className="packages-page-hero">
        <div className="container">
          <div className="packages-page-header" ref={headerRef}>
            <span className="section-badge">{t('packages.badge')}</span>
            <h1>
              {t('packages.title1')} <span className="gold-accent">{t('packages.title2')}</span>
            </h1>
            <p className="section-subtitle">
              {t('packages.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat.value}
                className={`filter-tab ${filter === cat.value ? 'filter-tab-active' : ''}`}
                onClick={() => setFilter(cat.value)}
              >
                {cat.label}
                <span className="filter-count">
                  {cat.value === 'All' ? packagesData.length : packagesData.filter(p => p.category === cat.value).length}
                </span>
              </button>
            ))}
          </div>

          <div className="all-packages-grid">
            {filtered.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;

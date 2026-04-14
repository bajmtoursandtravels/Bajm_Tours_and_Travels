import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheckCircle, FaUsers, FaHandshake, FaShieldAlt, FaHeart, FaArrowRight } from 'react-icons/fa';
import bajmlogo from '../../public/images/bajm.jpg';
import heroImage from '../assets/images/hero-medina.png';
import './About.css';
import { useLang } from '../i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const whyRef = useRef(null);
  const { t } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from('.about-hero-content > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });

      gsap.from('.story-content > *', {
        scrollTrigger: { trigger: storyRef.current, start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });

      gsap.from('.value-card', {
        scrollTrigger: { trigger: valuesRef.current, start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });

      gsap.from('.why-item', {
        scrollTrigger: { trigger: whyRef.current, start: 'top 80%' },
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <img src={heroImage} alt={t('about.heroTitle2')} />
          <div className="about-hero-overlay" />
        </div>
        <div className="container about-hero-content">
          <span className="section-badge">{t('about.heroBadge')}</span>
          <h1>
            {t('about.heroTitle1')} <span className="hero-highlight">{t('about.heroTitle2')}</span>
          </h1>
          <p>{t('about.heroSubtitle')}</p>
        </div>
      </section>

      {/* Story */}
      <section className="section about-story" ref={storyRef}>
        <div className="container">
          <div className="story-layout">
            <div className="story-image">
              <img src={bajmlogo} alt={t('about.storyBadge')} />
              <div className="story-experience">
                <span className="exp-number">9+</span>
                <span className="exp-text">{t('about.expText')}</span>
              </div>
            </div>
            <div className="story-content">
              <span className="section-badge">{t('about.storyBadge')}</span>
              <h2>
                {t('about.storyTitle1')} <span className="gold-accent">{t('about.storyTitle2')}</span>
              </h2>
              <p>
                {t('about.storyP1')}
              </p>
              <p>
                {t('about.storyP2')}
              </p>
              <p>
                {t('about.storyP3')}
              </p>
              <Link to="/packages" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                {t('about.explorePackages')} <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section values-section" ref={valuesRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{t('about.valuesBadge')}</span>
            <h2>
              {t('about.valuesTitle1')} <span className="gold-accent">{t('about.valuesTitle2')}</span>
            </h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <FaShieldAlt className="value-icon" />
              <h3>{t('about.val2Title')}</h3>
              <p>{t('about.val2Desc')}</p>
            </div>
            <div className="value-card">
              <FaHeart className="value-icon" />
              <h3>{t('about.val1Title')}</h3>
              <p>{t('about.val1Desc')}</p>
            </div>
            <div className="value-card">
              <FaHandshake className="value-icon" />
              <h3>{t('about.val3Title')}</h3>
              <p>{t('about.val3Desc')}</p>
            </div>
            <div className="value-card">
              <FaUsers className="value-icon" />
              <h3>{t('about.val4Title')}</h3>
              <p>{t('about.val4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-section" ref={whyRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{t('about.whyBadge')}</span>
            <h2>
              {t('about.whyTitle1')} <span className="gold-accent">{t('about.whyTitle2')}</span> {t('about.whyTitle3')}
            </h2>
          </div>
          <div className="why-grid">
            {[
              'about.why1',
              'about.why2',
              'about.why3',
              'about.why4',
              'about.why5',
              'about.why6',
              'about.why7',
              'about.why8',
            ].map((key, idx) => (
              <div key={idx} className="why-item">
                <FaCheckCircle className="why-icon" />
                <span>{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

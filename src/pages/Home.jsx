import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaWhatsapp, FaPhone, FaEnvelope, FaStar, FaQuoteLeft, FaArrowRight, FaYoutube } from 'react-icons/fa';
import PackageCard from '../components/PackageCard';
import packagesData from '../data/packages.json';
import reviewsData from '../data/reviews.json';
import heroImage from '../assets/images/hero-mecca.png';
import ServicesSection from './ServicesSection';
import { useLang } from '../i18n/LanguageContext';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef     = useRef(null);
  const statsRef    = useRef(null);
  const servicesRef = useRef(null);
  const packagesRef = useRef(null);
  const reviewsRef  = useRef(null);
  const contactRef  = useRef(null);
  const videosRef   = useRef(null);

  const { t, lang } = useLang();

  const getLocalizedValue = (value) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return value[lang] ?? value.en ?? '';
    }
    return value;
  };

  const featuredPackages = packagesData.filter(p => p.featured);

  // VIDEOS array — titles/descs translated via t()
  // NOTE: we define this inside the component so t() is in scope
  const VIDEOS = [
    {
      id: 'v1',
      youtubeId: '9BOcqK8kX1M',
      title: t('home.video1Title'),
      desc:  t('home.video1Desc'),
    },
    {
      id: 'v2',
      youtubeId: 'jud44wLATcM',
      title: t('home.video2Title'),
      desc:  t('home.video2Desc'),
    },
    {
      id: 'v3',
      youtubeId: 'wz9iayjtXhU',
      title: t('home.video3Title'),
      desc:  t('home.video3Desc'),
    },
    {
      id: 'v4',
      youtubeId: '0ud5QN0FH4U',
      title: t('home.video4Title'),
      desc:  t('home.video4Desc'),
    },
    {
      id: 'v5',
      youtubeId: 'zRNYe4WBNRg',
      title: t('home.video5Title'),
      desc:  t('home.video5Desc'),
    },
    {
      id: 'v6',
      youtubeId: 'kpsu-cDJyCg',
      title: t('home.video6Title'),
      desc:  t('home.video6Desc'),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 60, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3,
      });
      gsap.from('.service-card', {
        scrollTrigger: { trigger: servicesRef.current, start: 'top 80%' },
        y: 60, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
      });
      gsap.from('.stat-number', {
        scrollTrigger: { trigger: statsRef.current, start: 'top 80%' },
        textContent: 0, duration: 2, ease: 'power1.out', snap: { textContent: 1 }, stagger: 0.2,
      });
      gsap.from('.stat-item', {
        scrollTrigger: { trigger: statsRef.current, start: 'top 80%' },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
      });
      gsap.from('.packages-grid .package-card', {
        scrollTrigger: { trigger: packagesRef.current, start: 'top 80%' },
        y: 60, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out',
      });
      gsap.from('.review-card', {
        scrollTrigger: { trigger: reviewsRef.current, start: 'top 80%' },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
      });
      gsap.from('.contact-card', {
        scrollTrigger: { trigger: contactRef.current, start: 'top 80%' },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
      });
    });

    gsap.from('.video-card', {
      scrollTrigger: { trigger: videosRef.current, start: 'top 80%' },
      y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="home-page">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg">
          <img src={heroImage} alt="Masjid al-Haram, Mecca" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content container">
          <span className="hero-badge" lang="arabic" dir="rtl">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ✦
          </span>
          <h1>
            {t('home.heroTitle1')}
            <span className="hero-highlight"> {t('home.heroTitle2')}</span>
          </h1>
          <p className="hero-subtitle">{t('home.heroSubtitle')}</p>
          <div className="hero-buttons">
            <Link to="/packages" className="btn btn-primary btn-lg">
              {t('home.explorePackages')} <FaArrowRight />
            </Link>
            <a
              href="https://wa.me/919028889789?text=AssalamuAlaikum, I would like to know about your packages"
              className="btn btn-secondary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> {t('home.contactUs')}
            </a>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>{t('home.scrollDown')}</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="section services-section" ref={servicesRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{t('home.servicesBadge')}</span>
            <h2>
              {t('home.servicesTitle1')}{' '}
              <span className="gold-accent">{t('home.servicesTitle2')}</span>{' '}
              {t('home.servicesTitle3')}
            </h2>
            <p className="section-subtitle">{t('home.servicesSubtitle')}</p>
          </div>
          <ServicesSection servicesRef={servicesRef} />
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number" data-value="1000">1000</span>
              <span className="stat-suffix">+</span>
              <p className="stat-label">{t('home.stat1')}</p>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-value="9">9</span>
              <span className="stat-suffix">+</span>
              <p className="stat-label">{t('home.stat2')}</p>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-value="30">30</span>
              <span className="stat-suffix">+</span>
              <p className="stat-label">{t('home.stat3')}</p>
            </div> 
            <div className="stat-item">
              <span className="stat-number" data-value="100">100</span>
              <span className="stat-suffix">%</span>
              <p className="stat-label">{t('home.stat4')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packages ─────────────────────────────────────────── */}
      <section className="section packages-section" ref={packagesRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{t('home.packagesBadge')}</span>
            <h2>
              {t('home.packagesTitle1')}{' '}
              <span className="gold-accent">{t('home.packagesTitle2')}</span>
            </h2>
            <p className="section-subtitle">{t('home.packagesSubtitle')}</p>
          </div>
          <div className="packages-grid">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} featured />
            ))}
          </div>
          <div className="packages-cta">
            <Link to="/packages" className="btn btn-outline btn-lg">
              {t('home.viewAllPackages')} <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="section reviews-section" ref={reviewsRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{t('home.reviewsBadge')}</span>
            <h2>
              {t('home.reviewsTitle1')}{' '}
              <span className="gold-accent">{t('home.reviewsTitle2')}</span>
            </h2>
            <p className="section-subtitle">{t('home.reviewsSubtitle')}</p>
          </div>
          <div className="reviews-grid">
            {reviewsData.slice(0, 4).map((review) => (
              <div key={review.id} className="review-card">
                <FaQuoteLeft className="review-quote-icon" />
                <div className="review-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="review-text">{getLocalizedValue(review.text)}</p>
                <div className="review-author">
                  <div className="review-avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="review-name">{review.name}</h4>
                    <span className="review-location">{getLocalizedValue(review.location)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Videos ───────────────────────────────────────────── */}
      <section className="section videos-section" ref={videosRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{t('home.videosBadge')}</span>
            <h2>
              {t('home.videosTitle1')}{' '}
              <span className="gold-accent">{t('home.videosTitle2')}</span>
            </h2>
            <p className="section-subtitle">{t('home.videosSubtitle')}</p>
          </div>

          <div className="videos-grid">
            {VIDEOS.map(video => (
              <div key={video.id} className="video-card">
                <div className="video-embed">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="video-card-body">
                  <h3 className="video-card-title">{video.title}</h3>
                  <p className="video-card-desc">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="videos-cta">
            <a
              href="https://www.youtube.com/@bazmislamic"
              className="btn-youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube /> {t('home.visitYoutube')}
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section className="section contact-section" id="contact" ref={contactRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{t('home.contactBadge')}</span>
            <h2>
              {t('home.contactTitle1')}{' '}
              <span className="gold-accent">{t('home.contactTitle2')}</span>
            </h2>
            <p className="section-subtitle">{t('home.contactSubtitle')}</p>
          </div>
          <div className="contact-grid">
            <a
              href="https://wa.me/919028889789?text=AssalamuAlaikum, I would like to know more about your packages"
              className="contact-card contact-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="contact-icon" />
              <h3>{t('card.whatsapp')}</h3>
              <p>{t('home.whatsappDesc')}</p>
              <span className="contact-value">+91 90288 89789</span>
            </a>
            <a href="tel:+919028889789" className="contact-card contact-phone">
              <FaPhone className="contact-icon" />
              <h3>{t('home.callLabel')}</h3>
              <p>{t('home.callDesc')}</p>
              <span className="contact-value">+91 90288 89789</span>
            </a>
            <a
              href="mailto:info@bajmtours.com"
              className="contact-card contact-email-card"
            >
              <FaEnvelope className="contact-icon" />
              <h3>{t('home.emailLabel')}</h3>
              <p>{t('home.emailDesc')}</p>
              <span className="contact-value">info@bajmtours.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
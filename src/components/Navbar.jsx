import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGlobe, FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { useLang } from '../i18n/LanguageContext';
import './Navbar.css';
import logo from '../assets/bajm-tours-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const location = useLocation();
  const { lang, setLang, LANGUAGES, t } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  // Close lang dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const navLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.packages'), path: '/packages' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.gallery'), path: '/gallery' },
    { label: t('nav.contact'), path: '/#contact' },
  ];

  const handleContactClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${isOpen ? 'navbar-open' : ''}`}>
      <div className="navbar-container container">

        {/* Logo — unchanged from your file */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Bajm Tours Logo" className="logo-icon" />
          <div className="logo-text">
            <span className="logo-name">Bajm Tours</span>
            <span className="logo-tagline">{t('nav.tagline')}</span>
          </div>
        </Link>

        {/* Mobile hamburger — unchanged */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>

          {/* Nav links — unchanged */}
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
                onClick={link.path === '/#contact' ? handleContactClick : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* ── Globe Language Switcher (NEW) ── */}
          <li className="lang-li" ref={langRef}>
            <button
              className="lang-globe-btn"
              onClick={() => setLangOpen(o => !o)}
              aria-label={t('nav.selectLanguage')}
              aria-expanded={langOpen}
            >
              <FaGlobe />
              <span className="lang-globe-label">{t('nav.language')}</span>
            </button>

            {langOpen && (
              <ul className="lang-dropdown">
                {LANGUAGES.map(l => (
                  <li key={l.code}>
                    <button
                      className={`lang-option ${lang === l.code ? 'lang-option-active' : ''}`}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      dir={l.dir || 'ltr'}
                    >
                      <span className="lang-option-name">{l.label}</span>
                      {lang === l.code && <span className="lang-tick">✓</span>}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="navbar-socials-li">
            <div className="navbar-socials" aria-label="Social links">
              <a
                href="https://www.instagram.com/bajm_tours_and_travels/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="navbar-social-link social-instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/919028889789?text=AssalamuAlaikum, I am interested in your Umrah packages"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="navbar-social-link social-whatsapp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61569226280949"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="navbar-social-link social-facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bajmtoursandtravels@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="navbar-social-link social-email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://youtube.com/@bazmislamic?si=KRHR-oOeSzbHKyhq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="navbar-social-link social-youtube"
              >
                <FaYoutube />
              </a>
            </div>
          </li>

          {/* Book Now — unchanged */}
          <li>
            <a
              href="https://wa.me/919028889789?text=AssalamuAlaikum, I am interested in your Umrah packages"
              className="btn btn-primary btn-sm nav-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('nav.bookNow')}
            </a>
          </li>
        </ul>

      </div>

      {isOpen && <div className="navbar-overlay" onClick={() => setIsOpen(false)} />}
    </nav>
  );
};

export default Navbar;
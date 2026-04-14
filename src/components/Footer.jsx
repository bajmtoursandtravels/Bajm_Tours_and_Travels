import { Link } from 'react-router-dom';
import { FaMosque, FaWhatsapp, FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaYoutube, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';
import { useLang } from '../i18n/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLang();

  return (
    <footer className="footer">
      {/* CTA Banner */}
      <div className="footer-cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>
                {t('footer.ctaTitle1')} <span className="gold-accent">{t('footer.ctaTitle2')}</span>
              </h2>
              <p>{t('footer.ctaDesc')}</p>
            </div>
            <div className="cta-buttons">
              <a
                href="https://wa.me/919028889789?text=AssalamuAlaikum, I would like to know about Umrah packages"
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> {t('footer.chatWA')}
              </a>
              <a href="tel:+919028889789" className="btn btn-secondary btn-lg">
                <FaPhone /> {t('footer.callNow')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <FaMosque className="footer-logo-icon" />
                <div>
                  <span className="footer-logo-name">Bajm Tours</span>
                  <span className="footer-logo-tagline">{t('nav.tagline')}</span>
                </div>
              </Link>
              <p className="footer-description">
                {t('footer.description')} {t('footer.description2')}
              </p>
              {/* <div className="footer-socials">
                <a href="https://www.instagram.com/bajm_tours_and_travels/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61569226280949" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bajmtoursandtravels@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                  <FaEnvelope />
                </a>
                <a href="https://youtube.com/@bazmislamic?si=KRHR-oOeSzbHKyhq" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div> */}
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>{t('footer.quickLinks')}</h4>
              <ul>
                <li><Link to="/">{t('nav.home')}</Link></li>
                <li><Link to="/packages">{t('nav.packages')}</Link></li>
                <li><Link to="/about">{t('nav.about')}</Link></li>
                <li><Link to="/gallery">{t('nav.gallery')}</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4>{t('footer.ourServices')}</h4>
              <ul>
                <li><Link to="/packages">{t('footer.hajjPackages')}</Link></li>
                <li><Link to="/packages">{t('footer.umrahPackages')}</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4>{t('footer.contactUs')}</h4>
              <ul className="footer-contact">
                <li>
                  <FaPhone className="footer-contact-icon" />
                  <a href="tel:+919028889789">+91 90288 89789 <br />+91 84214 69789 <br />+91 73857 29930 </a>
                </li>
                <li>
                  <FaWhatsapp className="footer-contact-icon" />
                  <a href="https://wa.me/919080809330" target="_blank" rel="noopener noreferrer">Moulana Niyaz Ahmad Alvi</a>
                </li>
                <li>
                  <FaEnvelope className="footer-contact-icon" />
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bajmtoursandtravels@gmail.com" target="_blank" rel="noopener noreferrer">bajmtoursandtravels@gmail.com</a>
                </li>
                <li>
                  <FaMapMarkerAlt className="footer-contact-icon" />
                  <span>{t('footer.address')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Bajm Tours Hajj & Umrah Services. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

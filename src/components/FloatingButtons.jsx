import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import './FloatingButtons.css';
import { useLang } from '../i18n/LanguageContext';

const FloatingButtons = () => {
  const { t } = useLang();
  return (
    <div className="floating-buttons">
      <a
        href="tel:+919028889789"
        className="floating-btn floating-call"
        aria-label={t('footer.callNow')}
      >
        <FaPhone />
        <span className="floating-label">{t('card.call')}</span>
      </a>
      <a
        href="https://wa.me/919028889789?text=Assalamu Alaikum, I am interested in your Umrah packages"
        className="floating-btn floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('card.whatsapp')}
      >
        <FaWhatsapp />
        <span className="floating-label">{t('card.whatsapp')}</span>
      </a>
    </div>
  );
};

export default FloatingButtons;

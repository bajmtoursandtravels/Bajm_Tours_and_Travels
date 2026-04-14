import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaEnvelope, FaStar, FaClock, FaHotel, FaCheckCircle } from 'react-icons/fa';
import './PackageCard.css';
import { useLang } from '../i18n/LanguageContext';

const PackageCard = ({ pkg, featured = false }) => {
  const { t, lang } = useLang();
  const getLocalizedValue = (value) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return value[lang] ?? value.en ?? '';
    }
    return value;
  };

  const title = getLocalizedValue(pkg.title);
  const duration = getLocalizedValue(pkg.duration);
  const hotel = getLocalizedValue(pkg.hotel);
  const priceNote = getLocalizedValue(pkg.priceNote);
  const inclusions = (pkg.inclusions || []).map((item) => getLocalizedValue(item));
  const whatsappMsg = encodeURIComponent(`Assalamu Alaikum, I am interested in the ${title} (${pkg.price}). Please share more details.`);
  const categoryLabel = pkg.category === 'Hajj' ? t('packages.hajj') : pkg.category === 'Umrah' ? t('packages.umrah') : pkg.category;
  
  return (
    <div id="package-card"className={`package-card ${featured ? 'package-card-featured' : ''}`}>
      {featured && <div className="package-badge">{t('card.popularBadge')}</div>}
      
      <div className="package-image">
        <img 
          src={`/images/${pkg.image}`} 
          alt={title}
          loading="lazy"
        />
        <div className="package-category">{categoryLabel}</div>
      </div>

      <div className="package-content">
        <h3 className="package-title">{title}</h3>
        
        <div className="package-meta">
          <span className="package-meta-item">
            <FaClock /> {duration}
          </span>
          <span className="package-meta-item">
            <FaHotel /> {hotel}
          </span>
        </div>

        <div className="package-price">
          <span className="price-amount">{pkg.price}</span>
          <span className="price-note">{priceNote}</span>
        </div>

        <ul className="package-inclusions">
          {inclusions.slice(0, 4).map((item, idx) => (
            <li key={idx}>
              <FaCheckCircle className="inclusion-icon" />
              <span>{item}</span>
            </li>
          ))}
          {inclusions.length > 4 && (
            <li className="more-inclusions">
              + {inclusions.length - 4} {t('card.moreInclusions')}
            </li>
          )}
        </ul>

        <div className="package-actions">
          <a
            href={`https://wa.me/919028889789?text=${whatsappMsg}`}
            className="btn btn-whatsapp btn-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> {t('card.whatsapp')}
          </a>
          <a href="tel:+919028889789" className="btn btn-call btn-sm">
            <FaPhone /> {t('card.call')}
          </a>
          <a 
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=bajmtoursandtravels@gmail.com`}
            className="btn btn-email btn-sm"
          >
            <FaEnvelope /> {t('card.email')}
          </a>
        </div>

        <Link to={`/packages/${pkg.id}`} className="package-details-link">
          {t('card.viewDetails')}
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;

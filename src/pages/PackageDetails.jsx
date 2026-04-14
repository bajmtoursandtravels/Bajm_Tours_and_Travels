import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaEnvelope, FaCheckCircle, FaTimesCircle, FaClock, FaHotel, FaArrowLeft, FaMapMarkerAlt } from 'react-icons/fa';
import packagesData from '../data/packages.json';
import './PackageDetails.css';
import { useLang } from '../i18n/LanguageContext';

const PackageDetails = () => {
  const { id } = useParams();
  const pkg = packagesData.find(p => p.id === id);
  const { t, lang } = useLang();

  const getLocalizedValue = (value) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return value[lang] ?? value.en ?? '';
    }
    return value;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!pkg) {
    return (
      <div className="not-found-page">
        <div className="container" style={{ textAlign: 'center', paddingTop: '10rem' }}>
          <h1>{t('details.notFoundTitle')}</h1>
          <p>{t('details.notFoundSubtitle')}</p>
          <Link to="/packages" className="btn btn-primary" style={{ marginTop: '2rem' }}>
            {t('details.viewAllPackages')}
          </Link>
        </div>
      </div>
    );
  }

  const title = getLocalizedValue(pkg.title);
  const duration = getLocalizedValue(pkg.duration);
  const hotel = getLocalizedValue(pkg.hotel);
  const hotelMakkah = getLocalizedValue(pkg.hotelMakkah);
  const hotelMadinah = getLocalizedValue(pkg.hotelMadinah);
  const description = getLocalizedValue(pkg.description);
  const priceNote = getLocalizedValue(pkg.priceNote);
  const inclusions = (pkg.inclusions || []).map((item) => getLocalizedValue(item));
  const exclusions = (pkg.exclusions || []).map((item) => getLocalizedValue(item));
  const categoryLabel = pkg.category === 'Hajj' ? t('packages.hajj') : pkg.category === 'Umrah' ? t('packages.umrah') : pkg.category;
  const whatsappMsg = encodeURIComponent(`${t('details.whatsappIntro')} ${title} (${pkg.price}). ${t('details.whatsappOutro')}`);
  const emailSubject = encodeURIComponent(`${t('details.emailSubject')} ${title}`);
  const emailBody = encodeURIComponent(`${t('details.emailBodyIntro')} ${title} (${pkg.price}). ${t('details.emailBodyOutro')}`);

  return (
    <div className="package-details-page">
      {/* Hero Banner */}
      <section className="details-hero">
        <div className="details-hero-bg">
          <img src={`/images/${pkg.image}`} alt={title} />
          <div className="details-hero-overlay" />
        </div>
        <div className="container details-hero-content">
          <Link to="/packages" className="details-back">
            <FaArrowLeft /> {t('details.backToPackages')}
          </Link>
          <span className="details-category">{categoryLabel}</span>
          <h1>{title}</h1>
          <div className="details-hero-meta">
            <span><FaClock /> {duration}</span>
            <span><FaHotel /> {hotel}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="details-layout">
            {/* Main Content */}
            <div className="details-main">
              <div className="details-card">
                <h2>{t('details.aboutPackage')}</h2>
                <p className="details-description">{description}</p>
              </div>

              <div className="details-card">
                <h2>{t('details.hotelAccommodation')}</h2>
                <div className="hotel-info">
                  <div className="hotel-item">
                    <FaMapMarkerAlt className="hotel-icon" />
                    <div>
                      <h4>{t('details.makkah')}</h4>
                      <p>{hotelMakkah}</p>
                    </div>
                  </div>
                  <div className="hotel-item">
                    <FaMapMarkerAlt className="hotel-icon" />
                    <div>
                      <h4>{t('details.madinah')}</h4>
                      <p>{hotelMadinah}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="details-card">
                <h2>{t('details.included')}</h2>
                <ul className="details-list included">
                  {inclusions.map((item, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="list-icon included-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="details-card">
                <h2>{t('details.notIncluded')}</h2>
                <ul className="details-list excluded">
                  {exclusions.map((item, idx) => (
                    <li key={idx}>
                      <FaTimesCircle className="list-icon excluded-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="details-sidebar">
              <div className="price-card">
                <div className="price-card-header">
                  <span className="price-label">{t('details.startingFrom')}</span>
                  <span className="price-value">{pkg.price}</span>
                  <span className="price-per">{priceNote}</span>
                </div>

                <div className="price-card-actions">
                  <a
                    href={`https://wa.me/919028889789?text=${whatsappMsg}`}
                    className="btn btn-whatsapp btn-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: '100%' }}
                  >
                    <FaWhatsapp /> {t('details.enquireWhatsapp')}
                  </a>
                  <a href="tel:+919028889789" className="btn btn-call btn-lg" style={{ width: '100%' }}>
                    <FaPhone /> {t('footer.callNow')}
                  </a>
                  <a
                    href={`mailto:info@bajmtours.com?subject=${emailSubject}&body=${emailBody}`}
                    className="btn btn-email btn-lg"
                    style={{ width: '100%' }}
                  >
                    <FaEnvelope /> {t('details.emailInquiry')}
                  </a>
                </div>

                <div className="price-card-note">
                  <p>✦ {t('details.priceNote1')}</p>
                  <p>✦ {t('details.priceNote2')}</p>
                  <p>✦ {t('details.priceNote3')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageDetails;

// ── Drop-in replacement for the Services Section in Home.jsx ──
//
// USAGE in Home.jsx:
//   1. import ServicesSection from '../components/ServicesSection';
//   2. Replace the entire <section className="section services-section" ...> block with:
//        <ServicesSection servicesRef={servicesRef} />
//   3. Add to GSAP useEffect in Home.jsx:
//        gsap.from('.svc-icon-card', {
//          scrollTrigger: { trigger: servicesRef.current, start: 'top 80%' },
//          y: 40, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
//        });

import {
  FaUserTie,
  FaGraduationCap,
  FaBed,
  FaTshirt,
  FaUtensils,
  FaBoxOpen,
  FaBus,
  FaPassport,
} from 'react-icons/fa';
import './ServicesSection.css';
import { useLang } from '../i18n/LanguageContext';

const SERVICES = [
  { icon: <FaUserTie />,       labelKey: 'home.svc1' },
  { icon: <FaGraduationCap />, labelKey: 'home.svc2' },
  { icon: <FaBed />,           labelKey: 'home.svc3' },
  { icon: <FaTshirt />,        labelKey: 'home.svc4' },
  { icon: <FaUtensils />,      labelKey: 'home.svc5' },
  { icon: <FaBoxOpen />,       labelKey: 'home.svc6' },
  { icon: <FaBus />,           labelKey: 'home.svc7' },
  { icon: <FaPassport />,      labelKey: 'home.svc8' },
];

const ServicesSection = ({ servicesRef }) => {
  const { t } = useLang();
  
  return (
    <section className="section services-section" ref={servicesRef}>
      <div className="container">
        {/* ── 4×2 icon grid — matching image 2 ── */}
        <div className="services-icon-grid">
          {SERVICES.map((svc, idx) => (
            <div className="svc-icon-card" key={idx}>
              <div className="svc-icon-circle">
                {svc.icon}
              </div>
              <span className="svc-icon-label">{t(svc.labelKey)}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;

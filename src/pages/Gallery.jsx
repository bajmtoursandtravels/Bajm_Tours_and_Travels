import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaTimes, FaSearchPlus } from 'react-icons/fa';
import galleryData from '../data/gallery.json';
import './Gallery.css';
import { useLang } from '../i18n/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

// Fixed category order
const CATEGORY_ORDER = ['All', 'Makkah', 'Madinah', 'Hotels', 'Pilgrims'];
const CATEGORY_LABEL_KEYS = {
  All: 'gallery.all',
  Makkah: 'gallery.makkah',
  Madinah: 'gallery.madinah',
  Hotels: 'gallery.hotels',
  Pilgrims: 'gallery.pilgrims',
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');
  const galleryRef = useRef(null);
  const { t } = useLang();

  // Build categories in the defined order, only include those that exist in data
  const availableCategories = new Set(galleryData.map(img => img.category));
  const categories = CATEGORY_ORDER.filter(cat => cat === 'All' || availableCategories.has(cat));

  const filtered = filter === 'All' ? galleryData : galleryData.filter(img => img.category === filter);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from('.gallery-hero-content > *', {
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
      gsap.from('.gallery-item', {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      });
    });
    return () => ctx.revert();
  }, [filter]);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery-page">
      {/* Hero */}
      <section className="gallery-hero">
        <div className="container gallery-hero-content">
          <span className="section-badge">{t('gallery.badge')}</span>
          <h1>
            {t('gallery.title1')} <span className="gold-accent">{t('gallery.title2')}</span>
          </h1>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section" ref={galleryRef}>
        <div className="container">
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${filter === cat ? 'filter-tab-active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {t(CATEGORY_LABEL_KEYS[cat] || 'gallery.all')}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map(image => (
              <div
                key={image.id}
                className="gallery-item"
                onClick={() => openLightbox(image)}
              >
                <img
                  src={`/images/${image.src}`}
                  alt={image.title}
                  loading="lazy"
                />
                <div className="gallery-item-overlay">
                  <FaSearchPlus className="gallery-zoom-icon" />
                  <h4>{image.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <FaTimes />
          </button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img
              src={`/images/${selectedImage.src}`}
              alt={selectedImage.title}
            />
            <h3 className="lightbox-title">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

// src/i18n/LanguageContext.jsx
// Place this file at: src/i18n/LanguageContext.jsx

import { createContext, useContext, useEffect, useState } from 'react';
import translations from './translations';

const LanguageContext = createContext(null);

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिंदी'   },
  { code: 'mr', label: 'मराठी'   },
  { code: 'ur', label: 'اردو',  dir: 'rtl' },
];

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    const saved = window.localStorage.getItem('bajm_lang');
    return LANGUAGES.some((l) => l.code === saved) ? saved : 'en';
  });

  useEffect(() => {
    const selected = LANGUAGES.find((l) => l.code === lang);
    const direction = selected?.dir || 'ltr';

    document.documentElement.lang = lang;
    document.documentElement.dir = direction;
    document.body.dir = direction;
    window.localStorage.setItem('bajm_lang', lang);
  }, [lang]);

  // t('home.heroTitle1') — returns translated string for current lang
  const t = (path) => {
    const keys = path.split('.');
    let node = translations;
    for (const key of keys) {
      node = node?.[key];
      if (node === undefined) return path;
    }
    return node?.[lang] ?? node?.['en'] ?? path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
  return ctx;
};

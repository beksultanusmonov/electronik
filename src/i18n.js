import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

// localStorage dan tilni olish
const savedLanguage = localStorage.getItem('lang') || 'uz';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },

    lng: savedLanguage,         // localStorage dan yuklanadi
    fallbackLng: 'en',

    ns: ['translation'],
    defaultNS: 'translation',

    interpolation: {
      escapeValue: false,
    },
  });

// Agar til o‘zgarsa — localStorage ga yozilsin
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng);
});

export default i18n;

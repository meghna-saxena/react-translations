import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "translated-paragraph": "How are you Raj?",
    },
  },
  de: {
    translation: {
      "translated-paragraph": "Wie geht's Raj?",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "de",
  fallbackLng: "en",
});

export default i18n;

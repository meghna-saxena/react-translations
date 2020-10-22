import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "how-are-you": "How are you Raj?",
      "when-will-we-go-out": "When will we go out?",
      "let-us-watch-something": "Let's watch something",
      "i-love-you": "I love you!",
    },
  },
  de: {
    translation: {
      "how-are-you": "Wie geht es dir, Raj?",
      "when-will-we-go-out": "Wann gehen wir aus?",
      "let-us-watch-something": "Lassen Sie uns etwas ansehen",
      "i-love-you": "Ich liebe dich!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "de",
  fallbackLng: "en",
});

export default i18n;

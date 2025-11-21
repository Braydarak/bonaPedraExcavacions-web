import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import es from "./locales/es/es.json";
import en from "./locales/en/en.json";
import de from "./locales/de/de.json";
import ca from "./locales/ca/ca.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      lookupQuerystring: "lng",
      caches: ["localStorage", "cookie"],
    },
    resources: {
      es: { translation: es },
      en: { translation: en },
      de: { translation: de },
      ca: { translation: ca },
    },
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

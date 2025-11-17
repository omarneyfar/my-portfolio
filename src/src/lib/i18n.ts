import en from '../locales/en.json';
import fr from '../locales/fr.json';
import ar from '../locales/ar.json';

export type Locale = 'en' | 'fr' | 'ar';

const translations = {
  en,
  fr,
  ar,
};

export function getTranslations(locale: Locale = 'en') {
  return translations[locale] || translations.en;
}

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

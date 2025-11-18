import { getData } from "@/data";
import React from 'react';

type Locale = 'en' | 'fr';

// This function will be used to get the current language from the URL or cookies
export const getCurrentLocale = (): Locale => {
  // In a real app, you would get this from the URL or cookies
  // For now, we'll default to 'en'
  if (typeof window !== 'undefined') {
    const savedLang = localStorage.getItem('lang');
    return (savedLang === 'en' || savedLang === 'fr') ? savedLang : 'en';
  }
  return 'en';
};

// This function will be used to change the current language
export const changeLanguage = (locale: Locale): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lang', locale);
    // In a real app, you would also update the URL
    window.location.reload();
  }
};

interface TranslationResult {
  t: (key: string, params?: Record<string, unknown>) => string | unknown;
  i18n: {
    language: Locale;
  };
}

// This is a helper to get translated content from our data structure
export const useTranslation = (namespace?: string): TranslationResult => {
  const locale = getCurrentLocale();
  const data = getData(locale);
  
  const t = (key: string, params?: Record<string, unknown>): string | unknown => {
    // Simple key path resolution (e.g., 'hero.title')
    const keys = key.split('.');
    let value: unknown = namespace && data[namespace as keyof typeof data] 
      ? data[namespace as keyof typeof data] 
      : data;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in (value as object)) {
        value = (value as Record<string, unknown>)[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    // Simple parameter substitution
    if (params && typeof value === 'string') {
      return Object.entries(params).reduce(
        (str, [k, v]) => str.replace(new RegExp(`{{${k}}}`, 'g'), String(v)),
        value
      );
    }
    
    return value;
  };
  
  return { t, i18n: { language: locale } };
};

// Higher-order component for class components
type ComponentWithTranslationProps = {
  t: (key: string, params?: Record<string, unknown>) => string | unknown;
  i18n: {
    language: Locale;
  };
};

export function withTranslation<P extends object>(
  namespace?: string
): (Component: React.ComponentType<P & ComponentWithTranslationProps>) => React.ComponentType<P> {
  return function withTranslationWrapper(Component: React.ComponentType<P & ComponentWithTranslationProps>) {
    return function WithTranslationWrapper(props: P) {
      const { t, i18n } = useTranslation(namespace);
      return <Component {...props} t={t} i18n={i18n} />;
    };
  };
}

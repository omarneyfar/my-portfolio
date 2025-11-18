'use client';

import { changeLanguage, getCurrentLocale } from '@/lib/i18n';

const LanguageSwitcher = () => {
  const currentLocale = getCurrentLocale();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value as 'en' | 'fr');
  };

  return (
    <div className="relative inline-block text-gray-800 dark:text-gray-200">
      <select
        value={currentLocale}
        onChange={handleLanguageChange}
        className="block appearance-none w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        aria-label="Select language"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitcher;

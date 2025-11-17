'use client';

import { Globe } from 'lucide-react';
import { useState } from 'react';

interface LanguageSwitcherProps {
  currentLocale?: string;
}

export function LanguageSwitcher({ currentLocale = 'en' }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'ar', name: 'العربية' },
  ];

  const handleLanguageChange = (langCode: string) => {
    // In a real app, this would update the locale in the URL or context
    console.log('Language changed to:', langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 dark:text-gray-300 hover:text-[#00c2a8] transition-colors"
        aria-label="Change language"
      >
        <Globe size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-[#0f1724] rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2 hover:bg-[#f6f8fa] dark:hover:bg-[#081320] transition-colors ${
                currentLocale === lang.code ? 'text-[#00c2a8]' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

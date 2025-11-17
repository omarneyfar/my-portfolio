'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check initial dark mode preference
    const isDark = document.documentElement.classList.contains('dark') ||
      (localStorage.getItem('theme') === 'dark') ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 text-gray-700 dark:text-gray-300 hover:text-[#00c2a8] transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeDetection: true,
  },
  // Optional: Configure the directory where translations will be stored
  // We'll use our existing data structure instead of the default 'public/locales' folder
  localePath: './src/data',
  // Disable the default locale subpath routing (e.g., /en/about)
  // We'll handle language switching manually
  localeSubpaths: {}
};

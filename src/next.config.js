/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  i18n: {
    locales: ['en', 'fr', 'ar'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'en-IN', 'es-MX', 'fr'], // * If we are launching in new region(fr)
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'architecture.com',
        defaultLocale: 'en-US',
      },
      {
        domain: 'architecture.in',
        defaultLocale: 'en-IN',
      },
      {
        domain: 'architecture.es',
        defaultLocale: 'es-MX',
        http: true,
      },
    ],
  },
  trailingSlash: true,
}

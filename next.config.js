module.exports = {
  i18n: {
    localeDetection: false,
    locales: [
      'da',
      'en',
    ],
    defaultLocale: 'en',
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
      {
        source: '/:path*',
        destination: 'http://localhost:3001/:path*',
      },
    ]
  },
}

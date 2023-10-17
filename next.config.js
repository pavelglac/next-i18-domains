/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    localeDetection: false,
    locales: ["cs", "en"],
    defaultLocale: "en",
    domains: [
      {
        domain: 'example.cz',
        defaultLocale: "cs",
      },
    ],
  },
}

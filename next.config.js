/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  i18n:{
    lng: "en",
    localeDetection: false,
    defaultLocale: "en",
    locales: ["en","es"]
  }
}

module.exports = nextConfig

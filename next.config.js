/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        STOREFRONT_API_ACCESS_TOKEN: process.env.STOREFRONT_API_ACCESS_TOKEN,
        API_KEY: process.env.API_KEY,
        API_SECRET_KEY: process.env.API_SECRET_KEY,
        DOMAIN: process.env.DOMAIN
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.shopify.com',
            port: '',
            pathname: '/s/files/1/0811/2072/3233/files/**',
          },
        ],
      },
}

module.exports = nextConfig

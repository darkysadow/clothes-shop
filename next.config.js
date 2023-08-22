/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        STOREFRONT_API_ACCESS_TOKEN: process.env.STOREFRONT_API_ACCESS_TOKEN,
        API_KEY: process.env.API_KEY,
        API_SECRET_KEY: process.env.API_SECRET_KEY,
        DOMAIN: process.env.DOMAIN
    }
}

module.exports = nextConfig

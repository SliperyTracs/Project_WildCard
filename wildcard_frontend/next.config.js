/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "eatbook.sg" 
    ]
  }
}

module.exports = nextConfig

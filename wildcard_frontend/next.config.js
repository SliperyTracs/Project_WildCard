/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "eatbook.sg" ,
      "res.cloudinary.com"
    ]
  }
}

module.exports = nextConfig

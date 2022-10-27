/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "picsum.photos",
      "img.itch.zone"
    ]
  }
}

module.exports = nextConfig

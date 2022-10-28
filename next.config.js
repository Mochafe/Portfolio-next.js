/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "picsum.photos",
      "img.itch.zone",
      "opengraph.githubassets.com"
    ]
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.cursor.com',
      },
    ],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "careers.cred.club",
      },
    ],
  },
};

module.exports = nextConfig;

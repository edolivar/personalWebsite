/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  distDir: "dist", // Specify the output directory for the build
};

module.exports = nextConfig;

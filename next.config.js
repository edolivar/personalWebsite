/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "export", // Specify the output directory for the build
};

module.exports = nextConfig;

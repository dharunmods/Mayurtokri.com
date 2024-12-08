/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["bjorn66.com"], // Allowed domains for images
    unoptimized: true, // Disable Next.js image optimization for export
  },
  output: "export", // Ensure output is set to "export"
};

module.exports = nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add this line to allow images from Sanity
  },
  // Other config options can go here
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for CDN deployment
  output: 'export',
  
  // Required for static export - disables image optimization
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**', // Allow all domains for generated content
      },
    ],
  },
  
  // Disable features that don't work with static export
  typescript: {
    // Set to true if you want to skip type checking during build
    ignoreBuildErrors: false,
  },
  
  eslint: {
    // Set to true if you want to skip linting during build
    ignoreDuringBuilds: false,
  },
  
  // Ensure trailing slashes for static export
  trailingSlash: true,
  
  // React strict mode for better development experience
  reactStrictMode: true,
  
  // SWC minification for better performance
  swcMinify: true,
};

export default nextConfig;
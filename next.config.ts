import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'omo-oss-image.thefastimg.com',
        port: '',
        pathname: '/portal-saas/**',
      },
    ],
  },
};

export default nextConfig;

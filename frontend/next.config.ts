import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://www.lonestar.edu/images/internationalTravel.jpg')],
  },
};

export default nextConfig;

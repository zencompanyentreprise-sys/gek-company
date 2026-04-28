import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/drmoz88zw/image/upload/**",
      },
    ],
  },
};

export default nextConfig;

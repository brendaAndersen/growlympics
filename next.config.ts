import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["brendaandersen.github.io/growlympics/"],
     remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;

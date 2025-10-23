import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ["chromestars.live"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chromestars.live",
        pathname: "/file/**",
      },
    ],
  },
};

export default nextConfig;

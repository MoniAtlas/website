import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/pricing",
        destination: "/beta-access",
        permanent: true,
      },
      {
        source: "/waitlist",
        destination: "/beta-access",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

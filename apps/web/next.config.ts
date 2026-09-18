import type { NextConfig } from "next";

const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || "http://127.0.0.1:8000";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${API_URL}/api/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;

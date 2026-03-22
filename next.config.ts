import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "klcbwdwnasezfbvxdmgh.supabase.co" },
      { hostname: "*.supabase.co" },
    ],
  },
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default nextConfig;

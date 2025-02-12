import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = isProduction ? {
  basePath: "/ai-toolbox",
  output: "export",
  images: { unoptimized: true }
} : {};

export default nextConfig;

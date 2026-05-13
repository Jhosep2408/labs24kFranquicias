import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Opcional: Si el sitio se sube a una subcarpeta, añade assetPrefix y basePath
};

export default nextConfig;

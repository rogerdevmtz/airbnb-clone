import type { NextConfig } from "next";

// Tailwind CSS 4 se procesa con el loader de Turbopack.
const turbopack: NextConfig["turbopack"] = {
  rules: {
    "*.css": {
      loaders: ["@tailwindcss/turbopack"],
      as: "*.css",
    },
  },
};

// Demo estática en GitHub Pages (https://rogerdevmtz.github.io/airbnb-clone),
// generada por .github/workflows/deploy.yml con GITHUB_PAGES=true.
const githubPagesConfig: NextConfig = {
  output: "export",
  basePath: "/airbnb-clone",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack,
};

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Fotos de los alojamientos servidas desde Unsplash.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  turbopack,
};

export default process.env.GITHUB_PAGES === "true" ? githubPagesConfig : nextConfig;

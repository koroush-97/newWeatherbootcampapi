// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactStrictMode: false,
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,

  // برای پشتیبانی از GitHub Pages
  output: "export",
  images: {
    unoptimized: true, // حل مشکل لود نشدن تصاویر در gh-pages
  },
  basePath: "/نام-ریپوی-گیتهاب", // اینجا نام ریپوی گیت‌هابتو بزار
  assetPrefix: "/نام-ریپوی-گیتهاب",
};

export default nextConfig;

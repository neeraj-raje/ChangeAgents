/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath is needed while hosted at neeraj-raje.github.io/CABranding
  // Set to empty string for local dev, '/CABranding' for GitHub Pages
  basePath: process.env.NODE_ENV === 'development' ? '' : '/CABranding',
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : '/CABranding',
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './image-loader.ts',
  },
}

export default nextConfig

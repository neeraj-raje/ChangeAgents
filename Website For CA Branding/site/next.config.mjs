/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath matches the GitHub Pages repo path: neeraj-raje.github.io/ChangeAgents
  basePath: process.env.NODE_ENV === 'development' ? '' : '/ChangeAgents',
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : '/ChangeAgents',
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './image-loader.ts',
  },
}

export default nextConfig

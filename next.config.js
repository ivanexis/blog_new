/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
  basePath: '',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://goldrest.us.kg/' : '',
  trailingSlash: true,
};

module.exports = nextConfig; 
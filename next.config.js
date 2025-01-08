/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // 如果使用了外部图片，添加domains
  // images: {
  //   domains: ['your-domain.com']
  // }
};

module.exports = nextConfig; 
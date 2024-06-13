/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
};

export default nextConfig;

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/your-repo-name/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
}

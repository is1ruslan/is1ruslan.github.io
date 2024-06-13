/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
};

export default nextConfig;

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/is1ruslan.github.io/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
}

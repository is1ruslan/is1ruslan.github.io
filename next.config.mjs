// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // output: 'export',
// };

// export default nextConfig;

const isProd = process.env.NODE_ENV === 'production'

export default {
    // assetPrefix: isProd ? '/openliq/' : '',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    output: 'export',
    // basePath: isProd ? '/openliq' : '',
};

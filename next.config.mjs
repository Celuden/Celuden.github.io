/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  images: {
    unoptimized: true,
  },
  // Use this if you're deploying to a custom domain or want to test locally
  ...(process.env.NODE_ENV === 'production'
    ? {
        assetPrefix: './',
        basePath: '',
      }
    : {
        assetPrefix: '',
        basePath: '',
      }),
  trailingSlash: true,
}

export default nextConfig


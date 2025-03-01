/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs', // Change output directory to 'docs'
  images: {
    unoptimized: true,
  },
  basePath: '', // No basePath needed for username.github.io
  assetPrefix: './', // Use relative paths for assets
  trailingSlash: true,
}

export default nextConfig


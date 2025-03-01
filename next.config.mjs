/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Remove distDir to output to the root
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: './', // Use relative paths for assets
  trailingSlash: true,
}

export default nextConfig


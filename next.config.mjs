/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Correctly set the base path for GitHub Pages
  basePath: '/portfolio', // Replace 'portfolio' with your repository name
  assetPrefix: '/portfolio/', // Replace 'portfolio' with your repository name
  trailingSlash: true,
  // Disable image optimization since GitHub Pages doesn't support it
  images: {
    unoptimized: true,
  },
  // This will create a 404.html file which GitHub Pages uses for client-side routing
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/projects': { page: '/projects' },
      // Add other routes as needed
    }
  }
}

export default nextConfig


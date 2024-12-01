const path = require('path')
 
module.exports = {
  output: 'export',  // Static export mode
  assetPrefix: '/Portfolio/',
  basePath: '/Portfolio',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['media2.dev.to'], // Add any additional domains here,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
    ],
  },
}
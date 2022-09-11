const NextFederationPlugin = require('@module-federation/nextjs-mf')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org'],
  },
  webpack: (config, options) => { // webpack configurations
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'container',
          remotes: {
            movies: "movies@https://gilded-bonbon-7a0c8d.netlify.app/_next/static/chunks/remoteMovieEntry.js",
            remote_share_movie: "remote_share_movie@https://vocal-blancmange-29e14f.netlify.app/remoteEntry.js"
          },
          exposes: {},
          extraOptions: {
            enableImageLoaderFix: true,
            enableUrlLoaderFix: true,
          },
        })
      )
    }
    return config
  }
}

module.exports = nextConfig

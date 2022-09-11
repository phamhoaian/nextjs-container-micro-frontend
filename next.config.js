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
          name: 'host',
          remotes: {
            movies: "movies@http://localhost:3005/_next/static/chunks/remoteMovieEntry.js",
            remote_share_movie: "remote_share_movie@http://localhost:8080/remoteEntry.js"
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

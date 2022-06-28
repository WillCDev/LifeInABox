const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const config = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 9003,
    historyApiFallback: true,
    client: {
      overlay: { errors: true, warnings: false },
      progress: true,
    },
  },
})

// Turn off minimizing for dev builds
config.optimization.minimizer = []

module.exports = config

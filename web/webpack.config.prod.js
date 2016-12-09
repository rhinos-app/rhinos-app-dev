const webpack = require('webpack')
const devConfig = require('./webpack.config.dev')

var prodConfig = {
  target: 'web',
  cache: false,
  debug: false,
  devtool: 'source-map'
}
Object.assign(prodConfig, devConfig)

prodConfig.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
]

module.exports = prodConfig

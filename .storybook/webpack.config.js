// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://goo.gl/qPbSyX

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path')
const webpack = require('webpack')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        // exclude node_modules except ES6 modules:   #TODO: use include for whitelist.
        exclude: /node_modules\/(?!(react-native-|apsl-react-native)).*/,
        include: [
          path.resolve(__dirname, "../App"),
          path.resolve(__dirname, "../")
        ],
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          babelrc: false, // ignore .babelrc because we can't use both "module-resolver" & webpack resolve
          presets: ['react-native']
        }
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[ext]' }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  }
}

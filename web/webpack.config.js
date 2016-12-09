const path = require('path')
const webpack = require('webpack')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'src')
  },
  entry: [
    path.join(__dirname, '../index.web.js')
  ],
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
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
        query: { name: '[name].[hash:16].[ext]' }
      },
      {
        test: /\.ttf$/,
        loader: 'url-loader', // or directly file-loader
        include: path.resolve(__dirname, "../node_modules/react-native-vector-icons"),
      }
    ]
  },
  output: {
    path: path.join(__dirname, '../web/static'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    root: {
      modulesDirectories: ['../node_modules', '../App']
    },
    alias: {
      'react-native': 'react-native-web',
      'utils/init': path.join(__dirname, '../App/utils/init.web.js')
    },
    extensions: ['', '.js']
  }
}

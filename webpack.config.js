const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./client/src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + '/public/js' // requires an absolute path
  },
  watch: true,// rebuilds if something changes
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        loaders: 'babel-loader',
        query: {
          presets: ['react']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  plugins: [
  /*
    new webpack.optimize.UglifyJsPlugin({ // plugin to make output ugly
      compress: { warnings: false },
      output: {comments: false },
      mangle: false,
      sourcemap: false,
      minimize: true,
      mangle: { except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad'] }
    }), 
  */
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}
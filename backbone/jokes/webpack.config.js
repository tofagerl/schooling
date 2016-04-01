var path = require('path');
var Webpack = require('webpack');
module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'jokes.js'
  },
  plugins: [
    new Webpack.NoErrorsPlugin()
  ],
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'src'),
        loader: 'babel?presets[]=es2015'
      }
    ]
  }
};

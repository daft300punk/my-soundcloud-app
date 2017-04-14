var path = require('path');
var webpack = require('webpack');

require.extensions['.scss'] = () => { return; }; require.extensions['.css'] = () => { return; };
require.extensions['.png'] = () => { return; }

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [

      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.png$/,
        include: path.join(__dirname, 'src'),
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
var path = require('path');
var webpack = require('webpack');

require.extensions['.scss'] = () => { return; }; require.extensions['.css'] = () => { return; };
require.extensions['.png'] = () => { return; }

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  performance: {
    hints: 'error'
  },
  module: {
    loaders: [

      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.png$/,
        include: path.join(__dirname, 'src'),
        loader: 'url-loader?limit=80'
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
  },
  plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ]
};
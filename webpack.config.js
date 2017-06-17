const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './app/entry/index.js',
  output: {
    filename: 'swiper-banner.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(ttf|eot|woff|woff2|svg|jpe?g|png|gif)$/,
      use: [{
        loader: 'url-loader',
        query: {
          limit: 50000
        }
      }]
    }]
  },
  plugins: [
    new webpack.BannerPlugin(`
        Author  :   DasonCheng
        Email   :   dasoncheng@outlook.com
        Site    :   https://myour.cc
      `)
  ]
};
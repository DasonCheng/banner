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
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader", "postcss-loader"]
      })
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ['css-loader', "postcss-loader", 'sass-loader']
      })
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
  // devtool: "inline-source-map",
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new ExtractTextPlugin("swiper-banner.css"),
    new webpack.BannerPlugin(`
        Author  :   DasonCheng
        Email   :   dasoncheng@outlook.com
        Site    :   https://myour.cc
      `)
  ]
};

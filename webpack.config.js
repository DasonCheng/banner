const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    'bee-swiper': './app/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
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
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            "postcss-loader"
          ]
        })
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            "postcss-loader",
            'stylus-loader'
          ]
        })
      },
      {
        test: /\.(svg|jpe?g|png|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 50000,
            name: 'image/[hash].[ext]'
          }
        }]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 50000
          }
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.BannerPlugin(`
        Author  :   DasonCheng
        Email   :   dasoncheng@outlook.com
        Site    :   myour.cc
      `)
  ]
};

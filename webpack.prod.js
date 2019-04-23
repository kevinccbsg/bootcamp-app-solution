/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: path.join(__dirname, 'src', 'index.js'),
    detail: path.join(__dirname, 'src', 'detail.js'),
    login: path.join(__dirname, 'src', 'login.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/assets/index.html',
      chunks: ['app'],
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: false,
        removeComments: true,
      },
    }),
    new HtmlWebpackPlugin({  // Also generate a detail.html
      filename: 'detail.html',
      template: 'src/assets/detail.html',
      chunks: ['detail'],
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: false,
        removeComments: true,
      },
    }),
    new HtmlWebpackPlugin({  // Also generate a detail.html
      filename: 'login.html',
      template: 'src/assets/login.html',
      chunks: ['login'],
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /es/),
  ],
};
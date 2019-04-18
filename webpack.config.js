/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'src', 'index.js'),
    detail: path.join(__dirname, 'src', 'detail.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
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
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/assets/index.html',
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({  // Also generate a detail.html
      filename: 'detail.html',
      template: 'src/assets/detail.html',
      chunks: ['detail'],
    }),
  ],
  devServer: {
    open: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
  },
};
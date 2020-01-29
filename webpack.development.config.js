const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.config');

const devolpConfig = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  devtool: 'inline-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
};

module.exports = () => {
  return {
    ...commonConfig,
    ...devolpConfig,
  };
};

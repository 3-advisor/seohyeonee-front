const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 공통설정
const commonConfig = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/u,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/u,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};

// 개발 설정
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

// 배포 설정
const productConfig = {
  entry: './src/index.js',
};


module.exports = (env, args) => {
  if (args.mode === 'production') {
    return {
      ...commonConfig,
      ...productConfig,
    };
  }
  return {
    ...commonConfig,
    ...devolpConfig,
  };
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const aliasConfig = {
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
};

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: false,
    hot: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
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


if (process.env.ENVIRONMENT === 'production') {
  module.exports = config;
} else {
  module.exports = {
    ...config,
    ...aliasConfig,
  };
}

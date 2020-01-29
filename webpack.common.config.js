module.exports = {
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

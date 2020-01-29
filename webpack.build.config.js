const path = require('path');
const commonConfig = require('./webpack.common.config');

const productConfig = (env) => {
  const outputPath = env && env.path ? env.path : path.resolve(__dirname, 'dist');

  return {
    entry: './src/index.js',
    output: {
      path: outputPath,
      filename: 'bundle.js',
    },
  };
};

module.exports = (env) => {
  return {
    ...commonConfig,
    ...productConfig(env),
  };
};

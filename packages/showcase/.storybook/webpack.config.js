const path = require('path');

module.exports = config => {
  config.plugins = config.plugins.filter(
    p => p.constructor.name !== 'CaseSensitivePathsPlugin'
  );

  config.resolve = {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-transition-factory': path.resolve(__dirname, '../../core/dist/index.js'),
      'react-transition-components': path.resolve(__dirname, '../../components/dist/index.js'),
    },
  };

  config.module = {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  };

  return config;
};

const webpack = require('webpack');
const path = require('path');
const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

const isNode = process.env.TARGET_ENV === 'node';
const target = isNode ? 'node' : 'web';
const filename = isNode ? 'node/index.js' : 'index.js';

module.exports = {
  mode: 'production',
  target: target,
  context: src,
  entry: 'index.ts',
  output: {
    path: dist,
    filename: filename,
    publicPath: '/',
    libraryTarget: 'umd',
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.js(x?)$/,
        exclude: /(node_modules)/,
        use: [{ loader: 'babel-loader' }],
      }
    ],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-transition-group': {
      root: 'ReactTransitionGroup',
      commonjs2: 'react-transition-group',
      commonjs: 'react-transition-group',
      amd: 'react-transition-group',
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};

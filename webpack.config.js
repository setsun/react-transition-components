const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path');
const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  target: 'web',
  context: src,
  entry: 'index.js',
  output: {
    path: dist,
    filename: 'index.js',
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./src'),
    ],
    extensions: ['*', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'react-transition-group': 'react-transition-group'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  devtool: 'source-map'
};

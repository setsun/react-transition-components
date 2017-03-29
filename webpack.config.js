const webpack = require("webpack");
const path = require("path");
 
const DEV = path.resolve(__dirname, "src");
const OUTPUT = path.resolve(__dirname, "lib");
 
const config = {
  entry: DEV + "/index.js",
  output: {
    path: OUTPUT,
    filename: "index.js",
    publicPath: '/lib/',
    library: 'react-choreography',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './src'),
      path.resolve('./node_modules')
    ]
  },
  externals: {
    'react': 'commonjs react',
    'react-dom': 'commonjs react-dom',
    'react-addons-css-transition-group': 'commonjs react-addons-css-transition-group',
    'react-addons-transition-group': 'commonjs react-addons-transition-group'
  },
  module: {
    loaders: [
      {
        include: DEV,
        loader: "babel-loader",
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      }
    ]
  },
  devServer: {
    inline: true,
    historyApiFallback: true
  }
};
 
module.exports = config;

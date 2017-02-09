const webpack = require("webpack");
const path = require("path");
 
const DEV = path.resolve(__dirname, "src");
const OUTPUT = path.resolve(__dirname, "output");
 
const config = {
  entry: DEV + "/index.js",
  output: {
    path: OUTPUT,
    filename: "index.js",
    publicPath: '/output/'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './src'),
      path.resolve('./node_modules')
    ]
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

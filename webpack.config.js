const webpack = require("webpack");
const path = require("path");
 
const DEV = path.resolve(__dirname, "src");
const OUTPUT = path.resolve(__dirname, "output");
 
const config = {
  entry: DEV + "/index.js",
  output: {
    path: OUTPUT,
    filename: "index.js"
  },
  module: {
    loaders: [{
      include: DEV,
      loader: "babel-loader",
    }]
  }
};
 
module.exports = config;

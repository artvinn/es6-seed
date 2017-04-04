const path = require("path");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    filename: "bundle.js"
  },

  resolve: {
    extensions: [".js"]
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: ['env']
          }
        }
      }
    ]
  }
};
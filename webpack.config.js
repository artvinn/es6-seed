const webpack = require('webpack');
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/'
  },

  resolve: {
    modules: ['./node_modules'],
    extensions: [".js"]
  },

  devServer: {
    hot: true,
    inline: true,
    host: "localhost",
    port: 8080
  },

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
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
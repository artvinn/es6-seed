const webpack = require('webpack');
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js"
  },

  output: {
    filename: "[name].js",
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
          // this assumes your vendor imports exist in the node_modules directory
          return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
    new webpack.optimize.CommonsChunkPlugin({ 
        name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
    })
  ]
};
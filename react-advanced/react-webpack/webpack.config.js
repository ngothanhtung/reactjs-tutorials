var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
    react: ["react", "react-dom"],
    client: "./js/client.js",
    // about: "./about"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  output: debug ?
    {
      path: path.join(__dirname, "/public/"),
      filename: "[name].bundle.js"
    } : {
      path: path.join(__dirname, "/src/"),
      filename: "[name].bundle.js"
    },
  plugins: debug ?
    [
      new webpack.optimize.CommonsChunkPlugin({
        name: "react",
        filename: "[name].bundle.js",
        minChunks: Infinity
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "bundle",
        chunks: ["index"],
        filename: "[name].bundle.js",
      })
    ] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]
};
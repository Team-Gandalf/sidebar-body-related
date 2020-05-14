const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    concatenateModules: true,
  },
  entry: "./client/Index.jsx",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
};

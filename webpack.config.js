"use strict";

const { resolve, join } = require("path");

module.exports = {
  entry: "./app/index.js",
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  mode: "development",
  context: __dirname,
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /jsx?$/,
        include: resolve(__dirname, "./app"),
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    contentBase: join(__dirname, "./public/bundle.js"),
    compress: true,
    port: 1337,
  },
};

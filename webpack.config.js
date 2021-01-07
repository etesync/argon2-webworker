const path = require("path");

module.exports = {
  entry: "./main.js",
  module: {
    noParse: /\.wasm$/,
    rules: [
      {
        test: /\.worker.js/,
        use: {loader: "worker-loader", options: {inline: "no-fallback", esModule: false}},
      },
      {
        test: /\.wasm$/,
        use: {loader: "base64-loader"},
        type: "javascript/auto",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      "path": false,
      "fs": false,
    }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "argon2-webworker.js",
    libraryTarget: "commonjs",
    umdNamedDefine: true,
  },
  mode: "production",
};

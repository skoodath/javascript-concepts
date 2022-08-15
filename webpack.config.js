const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  devtool: "inline-source-map",
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  devServer: {
    static: "./dist"
  },
  module: {
    rules: [
      {
        test: /.(s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "resolve-url-loader", "sass-loader"]
      }
    ]
  }
}
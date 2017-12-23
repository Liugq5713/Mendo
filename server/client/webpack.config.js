const path = require("path");

// 配置
// 先写玩 entry output ,并且把dev-server搞定,并且配置一个找bug的功能
// 配置react,以及需要用到的babel
// 配置路由这些你要用到的 react 套装
// 配置CSS
// 你需要css-loader style-loader
// 如果你要使用sass ，可能会安装失败，因为他的东西被墙了 sass-loader,

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    // host:'192.168.137.1',
    port: 8080,
    open: true,
    proxy: [
      {
        path: "/api/*",
        target: "http://localhost:5000"
      }
    ]
  }
};
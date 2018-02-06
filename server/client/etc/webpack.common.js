const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "../dist")
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
      },
      {
        test: /.(woff|woff2|eot|ttf)$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[hash:8][name].[ext]",
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader"
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: process.cwd()
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: require("html-webpack-template"),
      title: "Mendo Chat App",
      appMountId: "app",
      baseHref: "http://10.224.5.55:8080/",
      lang: "zh-cmn-Hans",
      headHtmlSnippet: '<meta name="viewport" content="width=device-width,inital-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">  '
    })
  ]
};

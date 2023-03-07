// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const loadEnv = require("../scripts/loadEnv");
console.log(loadEnv);
loadEnv({ prefix: "REACT_APP" });

console.log(process.env);

module.exports = {
  target: "web", // 默认打包成web平台的
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js"],
    alias: {
      "~": path.resolve(__dirname, "../src"),
      "@": path.resolve(__dirname, "../src")
    }
  },
  devServer: {
    host: "fe.dev.autohome.com.cn",
    port: 8080
  },
  entry: path.resolve(__dirname, "../src/main.tsx"), // 文件的入口
  output: {
    filename: "js/[name].[chunkhash:8].js", // 文件名
    path: path.resolve(__dirname, "../dist") // 文件输出地址
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // 图片
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/images/[name].[ext]" // 存放的位置： dist/assets/images/文件
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // 字体
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/fonts/[name].[ext]" // 存放的位置： dist/assets/fonts/文件
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html")
    })
  ]
};

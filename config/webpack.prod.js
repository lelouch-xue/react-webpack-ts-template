// webpack.config.js
const path = require("path");
const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const common = require("./webpack.common.js");

const prod = {
  target: "web", // 默认打包成web平台的
  mode: "production",
  output: {
    filename: "js/[name].[chunkhash:8].js", // 文件名
    path: path.resolve(__dirname, "../dist"), // 文件输出地址
    clean: true
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ]
  }
};

module.exports = merge(common, prod);

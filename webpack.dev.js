const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const apiMocker = require('webpack-api-mocker');
const DllPlugin = require('webpack/lib/DllPlugin');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dev',
    hot: false,
    inline: true,
    port: 8084,
    /**
     * before在服务内部的所有其他中间件之前， 提供执行自定义中间件的功能。 这可以用来配置自定义处理程序
     * @param app
     */
    before(app) {
      apiMocker(app, path.resolve('./mocker/index.js'), {
        proxy: {
          '/repos/*': 'https://api.github.com/'
        },
        changeHost: true
      });
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"development"' }
    })
  ]
});

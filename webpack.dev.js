const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const apiMocker = require('webpack-api-mocker');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dev',
    hot: false,
    host: '10.11.135.29',
    port: 8081,
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

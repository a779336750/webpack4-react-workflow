const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  module: {
    // parser: 'sugarss',
    /**
     * noParse性能优化
     * 告诉webpack哪些文件不必解释，因为某些库文件，如jquery，lodash等直接可用，无需解析就可使用。
     */
    noParse: [/jquery|lodash/, /react\.min\.js$/],
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader',
            options: { modules: true, importLoaders: 1 }
          },
          {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              outputPath: 'assets/images/'
            }
          },
          {
            loader: 'image-webpack-loader', // 压缩图片
            options: {
              bypassOnDebug: true,
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                  enabled: true
                },
                pngquant: {
                  quality: '65-80',
                  speed: 4
                },
                gifsicle: {
                  interlaced: false
                },
                // the webp option will enable WEBP
                webp: {
                  quality: 75
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    /**
     * 设置html模板，配置生成的html文件的模板
     */
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.template.html'),
      favicon: path.resolve(__dirname, 'public/favicon-114x114.png'),
      inject: true,
      hash: true
    })
  ],
  resolve: {
    /**
     * 设置别名
     */
    alias: {
      '@src': path.resolve(__dirname, 'src')
    },
    /**
     * 性能优化，指定第三方modules搜索的目录,避免层层查找
     * 默认值为['node_modules']，会依次查找./node_modules、../node_modules、../../node_modules。
     */
    modules: [path.resolve(__dirname, 'node_modules')]
  }
};

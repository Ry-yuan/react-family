const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

commonConfig = {
  /* 入口文件 */
  entry: {
    app: [
      path.join(__dirname, '../src/index.js')
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },

  /*输出打包后文件bundle.js到dist目录*/
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name][chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/'
  },

  module: {
    /**
     * babel-loader 解析es6 7 reactjsx语法
     * src文件夹下面的以.js结尾的文件，要使用babel解析
     * cacheDirectory是用来缓存编译结果，下次编译加速
     */
    rules: [{
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, '../src')
    }, {
      /**
       * 编译图片 小于8k会变成base64格式
       */
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 1024
        }
      }]
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html')
    }),

    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ]
}

module.exports = commonConfig;
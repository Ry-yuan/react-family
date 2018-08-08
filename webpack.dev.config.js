const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /* 入口文件 */
  entry: path.join(__dirname, 'src/index.js'),

  /*输出打包后文件bundle.js到dist目录*/
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name][hash].js',
    chunkFilename: '[name][chunkhash].js'
  },


  module: {
    rules: [{
      /**
       * babel-loader 解析es6 7 reactjsx语法
       * src文件夹下面的以.js结尾的文件，要使用babel解析
       * cacheDirectory是用来缓存编译结果，下次编译加速
       */
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, 'src')
    }, {
      /**
       * 引入能够打包css
       * style-loader使得所有计算后的样式加入页面中
       * css-loader 使得能使用import引入样式到页面上
       */
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      /**
       * 编译图片 小于8k会变成base64格式
       */
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }]
  },

  devServer: {
    // content-base指定url的根目录，不指定的话会默认当前根目录
    contentBase: path.join(__dirname, './src'),
    // 所有的404页面转到index
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8080,
    hot: true
  },

  plugins: [
    /**热更新插件 */
    new webpack.HotModuleReplacementPlugin(),
    // HtmlWebpackPlugin插件能够使得生成的js插入到html中
    new HtmlWebpackPlugin({
      filename:'index.html',
      template: path.join(__dirname,'src/index.html')
    })
  ],

  // 能够看到详细的报错信息
  devtool: 'inline-source-map'

}
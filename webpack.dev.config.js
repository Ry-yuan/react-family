const path = require('path');
const webpack = require('webpack');

module.exports = {
  /* 入口文件 */
  entry: path.join(__dirname, 'src/index.js'),

  /*出口*/
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },

  /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
  /*cacheDirectory是用来缓存编译结果，下次编译加速*/
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, 'src')
    }]
  },

  devServer: {
    // content-base指定url的根目录，不指定的话会默认当前根目录
    contentBase: path.join(__dirname, './dist'),
    // 所有的404页面转到index
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8080,
    hot: true
  },

  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]


}
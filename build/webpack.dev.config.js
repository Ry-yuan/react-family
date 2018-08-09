const merge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.common.config');
const webpack = require('webpack');
const devConfig = {
  // ？
  devtool: 'inline-source-map',

  entry:{
    app:[
      path.join(__dirname , '../src/index.js')
    ]
  },

  output:{
    filename: '[name].[hash].js'
  },

  module:{
    rules:[{
      test:/\.css$/,
      use:["style-loader","css-loader"]
    }]
  },

  /**
   * webpack-dev-server编译后的文件，都存储在内存中，我们并不能看见
   */
  devServer: {
    contentBase: path.join(__dirname , '../dist'),
    // historyApiFallback，让所有的404定位到index.html
    historyApiFallback : true,
    host: '0.0.0.0',
    hot : true,
    port:8000
  },

  plugins:[
    // 使用热更新模块插件
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports  =  merge({
  /*entry.app不合并，全替换*/
  customizeArray(a,b,key){
    if(key === 'entry.app'){
      return b;
    }
    return undefined;
  }
})(commonConfig , devConfig);
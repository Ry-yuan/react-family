const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      path.join(__dirname, 'src/index.js')
    ],
    // react 等库生产一个文件，不必每次改变 缓存到用户中
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name][chunkhash].js',
    chunkFilename: '[name][chunkhash].js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    }, {
        test: /\.(png|jpg|gif)$/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 8192
            }
        }]
    }]
},
  plugins: [
    /**
     * 将js插入index模板中
     */
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      name: 'runtime'
    }),
    /**
     * 压缩文件的插件
     */
    new UglifyJSPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify('production')
       }
   }),
   new webpack.HashedModuleIdsPlugin(),

   /**
    * 清除原来的文件
    */
   new CleanWebpackPlugin(['dist']),

   /**
    * 抽取css
    */
   new ExtractTextPlugin({
    filename: '[name].[contenthash:5].css',
    allChunks: true
})
  ]
};
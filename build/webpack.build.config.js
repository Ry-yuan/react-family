const merge = require('webpack-merge');
const commonConfig = require ('./webpack.common.config');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const publicConfig = {
  devtool: 'cheap-module-source-map',

  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    }]
  },
  plugins: [
    /**
     * 压缩文件的插件
     */
    new UglifyJSPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    /**
     * 清除原来的文件
     */
    new CleanWebpackPlugin(['../dist']),
    /**
     * 抽取css
     */
    new ExtractTextPlugin({
      filename: '[name].[contenthash:5].css',
      allChunks: true
    })
  ]
};

module.exports = merge(commonConfig , publicConfig);
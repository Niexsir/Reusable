const webpack = require("webpack");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
common.output.publicPath = '/Reusable';
module.exports = merge(common, {
  mode:'production',
  // devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
        sourceMap: true
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 5, // 必须大于或等于 1
      minChunkSize: 1000
    })
  ]
});
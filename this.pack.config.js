const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
/**
 * 页面入口
 */
const _ENTRY = {
    index: './src/pages/index/index.js',
    other:'./src/pages/other/other.js'
}
/**
 * 构建输出出口
 */
const _OUTPUT = {
    filename: 'js/[name]/[name].bundle.js',
    path:  path.resolve(__dirname, "dist"),
    publicPath:'/'
}
/**
 * HTML模板
 */
const _HTMLWEBPACK = [
    new HtmlWebpackPlugin({
        title: 'index',
        filename:path.resolve(__dirname, 'dist/index.html'),
        template:path.resolve(__dirname, './src/pages/index/index.html'),
        favicon:'',
        hash:true,
        chunks:["index","test"],
        minify:false
    }),
    new HtmlWebpackPlugin({
        title: 'other',
        filename:path.resolve(__dirname, 'dist/other/index.html'),
        template:path.resolve(__dirname, './src/pages/other/other.html'),
        favicon:'',
        hash:true,
        chunks:["other"],
        minify:false
    })
]
/**
 * 扩展依赖
 */
const _externals = {
    jquery: 'jQuery'
}

module.exports = { 
    _ENTRY,
    _OUTPUT,
    _HTMLWEBPACK,
    _externals
}
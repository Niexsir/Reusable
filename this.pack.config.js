const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
/**
 * 页面入口
 */
const _ENTRY = {
    login: './src/pages/login/login.js',
    index: './src/pages/index/index.js',
    404:'./src/pages/404/404.js'
}
/**
 * 构建输出出口
 */
const _OUTPUT = {
    filename: 'js/[name]/[name].bundle.js',
    path:  path.resolve(__dirname, "docs"),
    publicPath:'/'
}
/**
 * HTML模板
 */
const _HTMLWEBPACK = [
    new HtmlWebpackPlugin({
        title: 'index',
        filename:path.resolve(__dirname, 'docs/login/index.html'),
        template:path.resolve(__dirname, './src/pages/login/login.html'),
        favicon:'',
        hash:true,
        chunks:["login"],
        minify:false
    }),
    new HtmlWebpackPlugin({
        title: 'index',
        filename:path.resolve(__dirname, 'docs/index.html'),
        template:path.resolve(__dirname, './src/pages/index/index.html'),
        favicon:'',
        hash:true,
        chunks:["index"],
        minify:false
    }),
    new HtmlWebpackPlugin({
        title: '404',
        filename:path.resolve(__dirname, 'docs/404/index.html'),
        template:path.resolve(__dirname, './src/pages/404/404.html'),
        favicon:'',
        hash:true,
        chunks:["404"],
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
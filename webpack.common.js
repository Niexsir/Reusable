const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/**清理旧的打包文件 */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const data = require('./this.pack.config.js');

module.exports = {
    entry:data._ENTRY,
    output: data._OUTPUT,
    module: {
        rules: [
            {
                test:/\.css$/,
                use:[ MiniCssExtractPlugin.loader , 'css-loader' ]
            },
            {
                test:/\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'less-loader'
                ]
            },
            /**es6 */
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/transform-runtime'],
                        cacheDirectory:true
                    }
                }
            },
            /**typscript */
            {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: [
                          [
                            "es2015",
                            {
                              "modules": false
                            }
                          ],
                          "es2016"
                        ]
                    }
                },{
                    loader: 'ts-loader'
                }]
            },
            /**图片 */
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options:{
                    name(){
                        return '[name].[hash].[ext]'
                    },
                    publicPath:'/image',
                    outputPath:'/image'
                }
            },
            /**字体 */
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options:{
                    name(){
                        return '[name].[hash].[ext]'
                    },
                    publicPath:'/fonts',
                    outputPath:'/fonts'
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['docs']),
        new webpack.optimize.SplitChunksPlugin({
            chunks: "all",
            minSize: 20000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
              }
          }),
        new MiniCssExtractPlugin({
            filename: "css/[name]/[name].css",
            chunkFilename: '[id].[hash].css'
        })
    ].concat(data._HTMLWEBPACK),
    externals:data._externals
}
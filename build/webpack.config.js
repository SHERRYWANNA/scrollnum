const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        "dist/index": path.resolve(__dirname, '../src/index.js'),
        "examples/dist/index": path.resolve(__dirname, '../examples/src/index.js')
    }, //入口文件
    output: {
        path: path.resolve(__dirname, '../'), 
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: [
                    'babel-loader'
                ],
                exclude: '/node_modules/'
            },
            {
                test: /\.vue$/,
                loaders: [
                    'vue-loader'
                ],
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loaders: [
                    'url-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.common.js'
        }
    },
    //插件
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, '../'),
        hot: true,
        inline: true,
        compress: true,
        host: 'localhost',
        port: 8080
    }

};

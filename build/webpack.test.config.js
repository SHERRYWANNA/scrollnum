var webpack = require('webpack');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            js: 'babel-loader'
                        },
                        preLoaders: {
                            js: 'istanbul-instrumenter-loader?esModules=true'
                        }
                    }
                }],
                exclude: '/node_modules/'
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['istanbul']
                    }
                },
                exclude: '/node_modules/'
            },
            {
                test: /\.js$/,
                enforce: 'post',
                use: [{
                    loader: 'istanbul-instrumenter-loader',
                    options: {
                        esModules: true
                    }
                }],
                exclude: '/node_modules/',
                include: '/src/'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|jpg)$/,
                loaders: [
                    'url-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.common.js'
        }
    }
};
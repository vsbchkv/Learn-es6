const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.js',
    },
    devtool: 'source-map',
    devServer: {
        compress: true,
        port: 9000,
        liveReload: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
    plugins: [
        new ESLintPlugin(),
        new HtmlWebpackPlugin({
            title: 'es6',
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
        }),
    ],
};
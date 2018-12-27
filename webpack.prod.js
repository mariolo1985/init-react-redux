const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const entries = [
    path.join(__dirname, 'src/js/master.js'),
    path.join(__dirname, 'src/scss/master.scss')
];

module.exports = {
    name: 'Bundling prod',
    mode: 'production',
    entry: entries,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/master.min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new MiniCssExtractPlugin({
            filename: 'css/master.min.css'
        }),
        new CopyWebpackPlugin([
            { from: 'src/*.html', to: path.join(__dirname, 'dist'), flatten: true },
            { from: 'src/data', to: path.join(__dirname, 'dist/data'), flatten: true }
        ])
    ]
};

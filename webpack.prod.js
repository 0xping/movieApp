const common = require('./webpack.config');
const { merge } = require('webpack-merge');
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');



module.exports = merge(common, {
    mode: "production",
    performance: false,
    output: {
        clean: true,
        filename: 'script/[name].[contenthash:5].js',
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'style/main.[contenthash:5].css' }),
        new ImageMinimizerPlugin({
            minimizerOptions: {
                plugins: [
                    ['gifsicle', { interlaced: true }],
                    ['jpegtran', { progressive: true }],
                    ['optipng', { optimizationLevel: 5 }],
                    ['svgo', { plugins: [{ removeViewBox: false }] }]
                ],
            },
        }),
    ],


    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: '../',}
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true, }
                    }
                    , 'postcss-loader'
                ]
            }

        ]
    },

});
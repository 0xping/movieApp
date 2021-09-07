const common = require('./webpack.config');
const { merge } = require('webpack-merge');
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    target: 'web',
    output: {
        filename: 'scripts/[name].js',
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'main.css' }),
    ],
    devServer: { disableHostCheck: true },
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true, }
                    }
                ]
            }
        ]
    },

})
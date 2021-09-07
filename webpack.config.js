const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    actor: "./src/scripts/actor.js",
    main: "./src/scripts/app.js",
    movie: "./src/scripts/movie.js",
    series: "./src/scripts/series.js",
    search: "./src/scripts/search.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      filename: "movie.html",
      template: "./src/movie.html",
      chunks: ["movie"],
    }),
    new HtmlWebpackPlugin({
      filename: "series.html",
      template: "./src/series.html",
      chunks: ["series"],
    }),
    new HtmlWebpackPlugin({
      filename: "actor.html",
      template: "./src/actor.html",
      chunks: ["actor"],
    }),
    new HtmlWebpackPlugin({
      filename: "search.html",
      template: "./src/search.html",
      chunks: ["search"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(html)$/,
        loader: "html-loader",
        options: { esModule: false },
      },
      {
        test: /\.(gif|jpe?g|tiff?|png|webp|bmp|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[contenthash:5].[ext]",
          outputPath: "assets/images",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf)(\?(t|v)=\d+)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[contenthash:5].[ext]",
            outputPath: "assets/fonts",
          },
        },
      },
    ],
  },
};

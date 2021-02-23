const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "static", "build"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/env", "@babel/preset-react"],
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
}
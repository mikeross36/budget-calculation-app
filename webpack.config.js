const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    // mode: process.env.NODE_ENV === "production" ? "production" : "development",
    entry: {
        bundle: path.resolve(__dirname, "src/js/index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        clean: true
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Budget App",
            filename: "index.html",
            template: "src/template.html"
        }),
    ]
}
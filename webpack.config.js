const path = require("path");
const exclude = [path.join(__dirname, "./html")];

module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    devtool: "inline-source-map",
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude,
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
                exclude,
            },
        ],
    },
    devServer: {
        contentBase: "./dist/",
    },
    output: {
        filename: "./js/index.js",
    },
};

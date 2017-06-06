var path = require("path");
var webpack = require("webpack")
module.exports = {
    entry: "./src/js/app/index.js",
    // entry: "./js/app/index.js",

    output: {
        // path: path.resolve("../public/javascripts"),
        //path.resolve()，在没有表明
        path: path.resolve("./public", "./javascripts"),
        filename: "index.js"
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"]
                // 从后往前执行
        }]


    },
    resolve: {
        alias: {
            jquery: path.join(__dirname, "js/libs/jquery-3.2.1.js"),
            mod: path.join(__dirname, "js/mod"),
            less: path.join(__dirname, "../src/less")
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
}
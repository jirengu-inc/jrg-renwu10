var webpack = require('webpack');
module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: __dirname + '/src/js',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
        aligns: {
            jquery: './node_modules/jquery/dist/jquery.min.js'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
    ]
};
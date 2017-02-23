var webpack = require('webpack');

module.exports = {
    entry: './src/js/app/webpack.index.js',
    output: {
        path: './src/js',
        //filename: "webpack.merge.js"
        filename: "webpack.merge.js"
    },
    /*module: {
        loaders: [
            {
                test: /\.css$/, loader: "style-loader!css-loader"
            }
        ]
    }*/
    resolve: {
        alias:{
            jquery: '../lib/jquery-3.1.1.min'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jquery": 'jquery'
        })
    ]
    
}
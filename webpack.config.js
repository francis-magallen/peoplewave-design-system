module.exports = {
    ...
    module: {
        rules: [{
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&' +
                "includePaths[]=" + (path.resolve(__dirname, "./node_modules")),
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
};
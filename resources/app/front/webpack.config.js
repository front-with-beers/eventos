const webpack = require("webpack");
const path = require('path');
const config = {
    entry:path.join(__dirname,'src/main.jsx'),
    devtool: 'source-map',
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist'),
        sourceMapFilename: '[file].map'
    },
    module:{
        loaders:[
            {
                test:/\.jsx?/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'] //Babel transformation usually on .babelrc
                }
            }
        ]
    }
}
module.exports= config;
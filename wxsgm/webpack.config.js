var path = require('path');
var webpack = require('webpack');


var distPath = path.join(__dirname, '/public/dist/');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './components/main.js',
    output: {
        path: distPath,
        publicPath: "/public/dist/",
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.html$/,loader: "html"},
            { test: /\.js?$/, loaders: ['jsx?harmony']}
        ]
    },
    resolve: {
        alias: {
            jwplayer: __dirname+'/public/static/plugins/jwplayer-7.3.4/jwplayer.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'm_vol.html'
        })
    ]
};
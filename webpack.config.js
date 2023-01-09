const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        index: './src/index.js',
        appendItem: './src/appendItem.js',
        home: './src/home.js',
        item: './src/item.js',
        aboutUs: './src/about us.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Schizo Restaurant Page'
        })
    ],
    output: {
        filename: ['name'].js,
        path: path.resolve(__dirname, 'dist'),
        "clean": true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }  
        ]
    },
    devServer: {
        static: './dist'
    },
    optimization: {
        runtimeChunk: 'single'
    }
};

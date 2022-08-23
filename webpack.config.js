const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        open: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'BBQ Catering',
            filename: 'index.html',
            inject: 'body',
            scriptLoading: 'defer',
        })
    ]
};
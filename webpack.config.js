const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './source/index.js',
    output: {
      path: path.join(__dirname, '/build'),
      filename: 'bundlefile.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test:/\.(png|jpg|webp)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './source/index.html'
        })
    ]
  }
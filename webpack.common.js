const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports={
    entry: path.join(__dirname, 'index.js'),
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(css|scss|sass)$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: 'compressed'
                            }
                        }
                    }
            ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|webp)$/,
                type: 'asset/resource' // no more url-loader with webpack-5
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ]
}
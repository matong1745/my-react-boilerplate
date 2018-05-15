const path = require('path');

module.exports = {
    entry: {
        js: ['babel-polyfill', path.resolve(__dirname, 'src') + '/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        port: 3000,
        host: "0.0.0.0",
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader'
            },
            {
                test: /\.css?/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[path]__[local]___[hash:base64:5]'
                        }
                    }
                ]
            },
            {
                test: /\.scss?/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[path]__[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|ttf|eot|woff2|svg|woff)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.css', '.scss' ],
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules')
        ]
    }
}
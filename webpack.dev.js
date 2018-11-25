const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-cheap-module-source-map',
    entry: {
        index: './src/index.js',
        panem: './src/panem/panem.js',
        gray: './src/gray/gray.js',
        doom: './src/doom/doom.js',
        nap: './src/nap/nap.js',
        noche: './src/noche/noche.js',
        esd: './src/esd/esd.js',
        peak: './src/peak/peak.js'
    },
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        // creates style nodes from JS strings
                        loader: "style-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        // translates CSS into CommonJS
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        // compiles Sass to CSS
                        loader: "sass-loader",
                        options: {
                            outputStyle: 'expanded',
                            sourceMap: true,
                            sourceMapContents: true
                        }
                    }
                    // Please note we are not running postcss here
                ]
            }
            ,
            {
                // Load all images as base64 encoding if they are smaller than 8192 bytes
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // On development we want to see where the file is coming from, hence we preserve the [path]
                            name: '[path][name].[ext]?hash=[hash:20]',
                            limit: 8192
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/panem/panem.html',
            inject: true,
            chunks: ['panem'],
            filename: 'panem.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/gray/gray.html',
            inject: true,
            chunks: ['gray'],
            filename: 'gray.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/doom/doom.html',
            inject: true,
            chunks: ['doom'],
            filename: 'doom.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/nap/nap.html',
            inject: true,
            chunks: ['nap'],
            filename: 'nap.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/noche/noche.html',
            inject: true,
            chunks: ['noche'],
            filename: 'noche.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/esd/esd.html',
            inject: true,
            chunks: ['esd'],
            filename: 'esd.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/peak/peak.html',
            inject: true,
            chunks: ['peak'],
            filename: 'peak.html'
        })
    ]
};

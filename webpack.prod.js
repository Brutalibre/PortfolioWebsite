const path = require('path');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
    devtool: 'source-map',
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
    output: {
        filename: '[name].[hash:20].js',
        path: buildPath
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
                test: /\.(scss|css|sass)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            // translates CSS into CommonJS
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            // Runs compiled CSS through postcss for vendor prefixing
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            // compiles Sass to CSS
                            loader: 'sass-loader',
                            options: {
                                outputStyle: 'expanded',
                                sourceMap: true,
                                sourceMapContents: true
                            }
                        }
                    ],
                    fallback: 'style-loader'
                }),
            },
            {
                // Load all images as base64 encoding if they are smaller than 8192 bytes
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[hash:20].[ext]',
                            limit: 8192
                        }
                    }
                ]
            }
        ]
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
        }),
        new CleanWebpackPlugin(buildPath),
        new FaviconsWebpackPlugin({
            // Your source logo
            logo: './src/assets/icon.png',
            // The prefix for all image files (might be a folder or a name)
            prefix: 'icons-[hash]/',
            // Generate a cache file with control hashes and
            // don't rebuild the favicons until those hashes change
            persistentCache: true,
            // Inject the html into the html-webpack-plugin
            inject: true,
            // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
            background: '#fff',
            // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
            title: 'portfolio-website}}',

            // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false
            }
        }),
        new ExtractTextPlugin('styles.[md5:contenthash:hex:20].css', {
            allChunks: true
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                map: {
                    inline: false,
                },
                discardComments: {
                    removeAll: true
                }
            },
            canPrint: true
        })
    ]
};

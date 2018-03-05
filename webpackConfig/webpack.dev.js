const webpack = require("webpack"),
    path = require("path"),
    htmlWebpackPlugin = require("html-webpack-plugin"),
    extractTextPlugin = require("extract-text-webpack-plugin"),
    UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
    ROOT_DIR = "/",
    HOME_DIR = path.resolve(__dirname, "../"),
    BUILD_DIR = path.resolve(__dirname, "../build"),
    DLL_DIR = path.resolve(__dirname, "../dll"),
    APP_DIR = path.resolve(__dirname, "../scripts"),
    STYLESHEET_DIR = path.resolve(__dirname, "../stylesheets"),
    MANIFEST_DIR = require(path.resolve(__dirname, `${DLL_DIR}/vendor_manifest.dll.json`));

const PORT = 9088;

const edition = "dev";

const webpackDevPlugin = {
    devtool: "eval",
    entry: {
        index: `${APP_DIR}/index.js`
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    sourceMap: true,
                    compress: {
                        unused: false,
                        dead_code: false,
                        warnings: true
                    },
                    output: {
                        comments: true
                    }
                }
            })
        ]
    },
    output: {
        publicPath: ROOT_DIR,
        filename: "[name].[hash].js",
        path: BUILD_DIR
    },
    resolve: {
        modules: [
            "node_modules",
            APP_DIR
        ]
    },
    externals: {
        jquery: "jQuery"
    },
    module: {
        rules: [
            {
                test: /.js[x]?$/,
                include: [
                    APP_DIR,
                    DLL_DIR,
                    STYLESHEET_DIR
                ],
                use: [{
                    loader: "babel-loader"
                }]
            },
            {
                test: /.css$/,
                use: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    }, {
                        loader: "postcss-loader"
                    }],
                    publicPath: STYLESHEET_DIR
                })
            },
            {
                test: /.(jpg|jpeg|png|gif|bmp)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000
                    }
                }, {
                    loader: "image-webpack-loader"
                }]
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DllReferencePlugin({
            manifest: MANIFEST_DIR,
            context: HOME_DIR
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: edition
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": process.env.NODE_ENV
        }),
        new htmlWebpackPlugin({
            publicPath: ROOT_DIR,
            filename: "index.html",
            template: `${HOME_DIR}/index.html`,
            chunks: ['index'],
            inject: "body"
        })
    ],
    devServer: {
        host: "0.0.0.0",
        port: PORT,
        proxy: {}
    }
}

module.exports = webpackDevPlugin;
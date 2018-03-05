const webpack = require("webpack"),
    path = require("path"),
    UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
    ROOT_DIR = "/",
    HOME_DIR = path.resolve(__dirname, "../.."),
    DLL_DIR = path.resolve(__dirname, "../dll");

const webpackDllConfig = {
    devtool: "source-map",
    entry: {
        vendor: ["react", "react-router", "redux", "react-redux", "redux-thunk", "redux-logger", "redux-saga", "moment", "babel-polyfill", "prop-types", "antd"]
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
        path: DLL_DIR,
        library: "[name]_[chunkhash]"
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DllPlugin({
            path: path.join(DLL_DIR, "[name]_manifest.dll.json"),
            name: "[name]_[chunkhash]",
            context: HOME_DIR
        })
    ]
};

module.exports = webpackDllConfig;
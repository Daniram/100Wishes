const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: [
        './main.js'
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist')
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'assets/css'),
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "stage-0", "react"]
                },
            }
        ]
    },

    node: {
        fs: "empty",
        tls: "empty",
        setImmediate: true
    },

    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"]
    },

    devtool: 'inline-source-map',

    plugins: [
        new webpack.NamedModulesPlugin(),
        //new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ],
};

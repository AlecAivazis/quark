// external imports
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './docs/src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
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
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './docs/src/index.html',
            path: path.resolve(__dirname, 'build', 'index.html')
        })
    ],
    resolve: {
        alias: {
            'quark-web': path.resolve(__dirname, '../packages/quark-web/build'),
            'quark-core': path.resolve(__dirname, '../packages/quark-core/build')
        }
    },
    devServer: {
        historyApiFallback: true
    }
}

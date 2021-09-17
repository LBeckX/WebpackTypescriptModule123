const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    // "development" to generate a sourcemap
    mode: "development",

    // Watch file changes
    watch: true,

    // Entry points index and asynchron module
    entry: {
        index: {
            import: './src/index.ts',
            dependOn: [
                'shared'
            ]
        },
        asyncModule: './src/async-module.ts',
        shared: {
            import: [
                'lodash'
            ]
        },
        styles: './src/app.scss'
    },

    // Define js output with bundle name
    output: {
        filename: '[name].bundle.js',

        // Define output path. Must be absolute
        path: path.resolve(__dirname, 'dist/public'),
    },

    /*
    * If we're going to use multiple entry points on a single HTML page, optimization.runtimeChunk: 'single' is needed too, otherwise we could get into trouble described here.
    */
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },

    // Define inline sourcemap
    devtool: 'inline-source-map',

    module: {
        // Files and specific loader for them
        rules: [
            {
                test: /\.tsx?$/i,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(s[ac]ss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ],
    },

    resolve: {
        extensions: ['*', '.tsx', '.ts', '.js'],
    },

    plugins: [
        // Load plugin for css export
        new MiniCssExtractPlugin({
            // Define the output filename
            filename: "main.css"
        }),
    ]
};

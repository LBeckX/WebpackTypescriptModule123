const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    // Entry point
    entry: './src/index.ts',

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
                        options: {
                        }
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

    // Define js output
    output: {
        filename: 'bundle.js',

        // Define output path. Must be absolute
        path: path.resolve(__dirname, 'dist/public'),
    },

    // "development" to generate a sourcemap
    mode: "development",

    // Watch file changes
    watch: true,
    plugins: [
        // Load plugin for css export
        new MiniCssExtractPlugin({
            // Define the output filename
            filename: "main.css"
        }),
    ]
};

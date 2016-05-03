var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
module.exports = {
    entry: "./src/hub-page/main.ts",
    output: {
        path: path.join(__dirname, "scripts"),
        filename: "bundle.js",
        libraryTarget: "amd"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            // {output}/file.txt 
            { from: './node_modules/es6-promise/dist/es6-promise.min.js', to: 'libs/es6-promise.min.js' },
            { from: './node_modules/es6-shim/es6-shim.min.js', to: 'libs/es6-shim.min.js' },
            { from: './node_modules/jquery/dist/jquery.min.js', to: 'libs/jquery.min.js' },
            { from: './node_modules/vss-web-extension-sdk/lib/VSS.SDK.min.js', to: 'libs/VSS.SDK.min.js' }
        ])],
    externals: [
        {
            "./VSS/Controls": "VSS/Controls",
            "VSS/Controls": "VSS/Controls",
            "./VSS/Controls/Grids": "VSS/Controls/Grids",
            "VSS/Controls/Grids": "VSS/Controls/Grids",
            "./VSS/Controls/Menus": "VSS/Controls/Menus",
            "VSS/Controls/Menus": "VSS/Controls/Menus"
        }
    ]
};
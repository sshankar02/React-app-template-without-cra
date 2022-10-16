const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports=merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: "1234",
        static: [path.join(__dirname, 'public')],
        open: true,
        hot: true,
        liveReload: true
    }
});
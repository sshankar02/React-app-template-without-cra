const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const packageJson = require('./package.json');
const path = require('path');

module.exports=merge(common, {
    mode: 'production',
    devtool: 'source-map'
})
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contenteBase : path.join(__dirname, 'dist'),
        port: 3000,
        open: true,
    }
};
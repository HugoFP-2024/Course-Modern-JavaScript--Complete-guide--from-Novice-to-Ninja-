const path = require('path');

module.exports = {
    mode: 'development',
    // Main entry point is app.js which will import other JS files
    entry: './scripts/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    // Add module rules for processing CSS files
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    watch: true
}
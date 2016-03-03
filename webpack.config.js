module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'dist/avs-loader.js',
        library: 'AvsLoader = module.exports'
    }
};

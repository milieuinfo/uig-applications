module.exports = (config, context) => {
    console.log('custom-webpack.config.js - config', config.module);
    return {
        ...config,
        module: {
            ...config.module,
            rules: [
                ...config.module.rules,
                {
                    test: /\.js$/,
                    enforce: "pre",
                    use: ["source-map-loader"],
                }
            ]
        }
    };
};

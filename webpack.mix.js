let mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .webpackConfig({
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.obj$/,
                    loader: "webpack-obj-loader"
                },
                {
                    test: /\.(gltf)$/,
                    use: [
                        {
                            loader: "gltf-webpack-loader"
                        }
                    ]
                },
                {
                    test: /\.(bin)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {}
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
        }
    })
    .setResourceRoot("/");

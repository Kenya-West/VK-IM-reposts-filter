import path from "path";
import { Configuration, BannerPlugin } from "webpack";
import TerserPlugin from "terser-webpack-plugin";
import { generateHeader, GeneratePathToHotReloadFilePlugin } from "./plugins/userscript.plugin";

const configCommon: Configuration = {
    mode: "none",
    output: {
        path: path.resolve(__dirname, "userscript"),
        filename: "[filename].js",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    externals: {
        axios: "axios",
    },
    plugins: [
        new BannerPlugin({
            banner: generateHeader,
            raw: true,
        })
    ]
}

const configUserscript: Configuration = {
    ...configCommon,
    entry: {
        bundle: { import: "./src/index.ts", filename: "index.user.js" }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
        ],
    },
    optimization: {
        minimize: false,
        minimizer: [new TerserPlugin({
            // minify: TerserPlugin.swcMinify,
            terserOptions: {
                format: {
                    comments: false,
                },
                compress: false,
                mangle: false,
            },
            extractComments: false,
        })],
    }
}

const configDev: Configuration = {
    ...configCommon,
    
    entry: {
        devBundle: { import: "./src/.empty", filename: "index.hot-reload.user.js" }
    },
    plugins: configCommon.plugins?.concat([
        new GeneratePathToHotReloadFilePlugin()
    ]),
};

export default [configUserscript, configDev];
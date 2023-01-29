import path from "path";
import { Configuration, BannerPlugin } from "webpack";
import TerserPlugin from "terser-webpack-plugin";
import { generateHeader, GeneratePathToUserscriptPlugin } from "./plugins/userscript.plugin";
import * as dotenv from "dotenv";

dotenv.config();

export type Mode = "development" | "none" | "production" | undefined;

const mode: Mode = process.env.NODE_ENV as Mode || "development";

const configCommon: Configuration = {
    mode: mode === "development" ? "none" : mode,
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
        bundle: ["./src/index.ts", `./src/environment/environment.${mode}.ts`]
    },
    output: {
        path: path.resolve(__dirname, "userscript"),
        filename: "index.user.js"
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
        new GeneratePathToUserscriptPlugin()
    ]),
};

export default [configUserscript, configDev];
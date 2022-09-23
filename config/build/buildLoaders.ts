import { BuildOptions } from './type/config';
import webpack from "webpack";
import MiniCssExtractPlugin, { loader } from "mini-css-extract-plugin";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const typescripLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                    },
                }
            },
            "sass-loader",
        ],
    }
    return [typescripLoader, cssLoader];
}
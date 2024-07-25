import * as path from 'path'
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin';
const common: Configuration & DevServerConfiguration = {
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.ts?x$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html')
    })
    ],
}

export default common;
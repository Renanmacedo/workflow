import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from 'webpack'
import * as webpack from 'webpack'
import common from './webpack.common';
import deepMerge from "../deepMerge";
import * as packageJson from '../package.json';

const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;
const prodConfig: Configuration & DevServerConfiguration = {
    mode: 'production',
    output:{
        filename: '[name].[contenthash].js',
        publicPath: '/products/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './Product': './src/bootstrap.tsx'
            },
            shared: packageJson.dependencies
          }),
    ]
}
export default deepMerge(common, prodConfig)
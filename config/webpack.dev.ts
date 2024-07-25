import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from 'webpack'
import * as webpack from 'webpack'
import common from './webpack.common';
import deepMerge from "../deepMerge";

const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;
const config: Configuration & DevServerConfiguration= {
    mode:'development',
    devServer: {
        port: 4002,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin ({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './Product': './src/bootstrap.tsx'
            },
            shared: {
                '@faker-js/faker': {
                    singleton: true
                },
                react: {
                    singleton: true
                },
                'react-dom': {
                    singleton: true
                }
            }
        }),
    ]
}
export default deepMerge(common, config);
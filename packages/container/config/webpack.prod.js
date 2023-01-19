const { merge } = require("webpack-merge");
//const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require('./webpack.common');
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;


const prodConfig = {
    mode: "production",
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederation({
            name: "container",
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js`,
                auth: "auth@http://localhost:8082/remoteEntry.js",
                dashboard: "dashboard@http://localhost:8083/remoteEntry.js"
            },
            shared: packageJson.dependencies,
        }),
    ]
};

module.exports = merge(commonConfig, prodConfig);
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const webpackNodeExternals = require("webpack-node-externals");

const common = {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader:
          "css/locals?module&localIdentName=[name]__[local]___[hash:base64:5]",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(__dirname, "tsconfig.json")
      })
    ]
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  }
}


const serverConfig = {
  target: 'node',
  externals: [webpackNodeExternals()],
  entry: {
    server: "./src/server/index.ts"
  },
  ...common,
};

const clientConfig = {
  target: 'web',
  entry: {
    client: "./src/client/index.tsx",
  },
  ...common
};

module.exports = [ serverConfig, clientConfig ];

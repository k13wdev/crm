const { ModuleFederationPlugin } = require("webpack").container;
const getPlugins = require("../../webpack.plugins");
const getRules = require("../../webpack.rules");
const deps = require("./package.json").dependencies;


const moduleFederationPlugin = new ModuleFederationPlugin({
  name: "host",
  filename: "remoteEntry.js",
  remotes: {
    remoteApp: "remoteApp@http://localhost:5001/remoteEntry.js",
  },
  exposes: {},
  shared: {
    "@babel/runtime": {
      singleton: true,
      requiredVersion: deps["@babel/runtime"],
    },
    react: {
      singleton: true,
      requiredVersion: deps.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
});

module.exports = (_, argv) => {
  const isDevelopment = argv.mode === "development";

  const plugins = getPlugins(isDevelopment);
  const rules = getRules(isDevelopment);

  return {
    mode: argv.mode,
    entry: {
      app: ["./src/index.js"],
    },
    output: {
      publicPath: "http://localhost:5000/",
      clean: true,
    },

    resolve: {
      extensions: [".jsx", ".js"],
      alias: {},
    },

    module: {
      rules,
    },

    plugins: plugins.concat(moduleFederationPlugin),

    devServer: {
      open: true,
      compress: false,
      hot: isDevelopment,
      historyApiFallback: true,
      devMiddleware: {
        writeToDisk: !isDevelopment,
      },
      port: 5000,
    },

    devtool: isDevelopment ? "eval-source-map" : false,
  };
};

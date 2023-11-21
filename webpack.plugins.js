const HtmlWebPackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = (isDevelopment) => {
  return [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx"],
      fix: true,
    }),
    new StylelintPlugin({
      extensions: ["css"],
      fix: true,
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean);
};

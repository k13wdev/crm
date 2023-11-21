const babelConfig = require("./babel.config.json");

module.exports = (isDevelopment) => {
  return [
    {
      test: /\.js$/,
      resolve: {
        fullySpecified: false,
      },
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader", "postcss-loader"],
    },
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: babelConfig,
      },
    },
  ];
};

const path = require("path");

module.exports = (name, mode, target) => {
  return {
    mode,

    devtool: "source-map",

    entry: path.join(__dirname, "../", "src", "index.js"),

    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },

    resolve: {
      extensions: [".js"],
    },
  };
};

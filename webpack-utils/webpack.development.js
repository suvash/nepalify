const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (name, mode, target) => {
  const outDir = target === "umd" ? "umd" : "cjs";

  return {
    mode,

    output: {
      path: path.join(__dirname, "../", outDir),
      filename: `${name}.${mode}.js`,
      library: `${name}`,
      libraryExport: "default",
      libraryTarget: target,
      umdNamedDefine: true,
    },

    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: path.join(__dirname, "../", "example", "index.html"),
      }),
    ],

    devServer: {
      contentBase: path.join(__dirname, "../", "umd"),
    },
  };
};

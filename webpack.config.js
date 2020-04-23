const webpackMerge = require("webpack-merge");

const pkg = require("./package.json");
const modeConfig = (name, mode, target) => {
  return require(`./webpack-utils/webpack.${mode}`)(name, mode, target);
};

module.exports = (
  { mode, target } = { mode: "development", target: "umd" }
) => {
  console.log({ mode, target });

  return webpackMerge(
    modeConfig(pkg.name, "common", target),
    modeConfig(pkg.name, mode, target)
  );
};

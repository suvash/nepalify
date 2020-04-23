const path = require("path");

module.exports = (name, mode, target) => {
  const outDir = target === "umd" ? "umd" : "cjs";

  return {
    mode,

    output: {
      path: path.join(__dirname, "../", outDir),
      filename: `${name}.${mode}.min.js`,
      library: `${name}`,
      libraryExport: "default",
      libraryTarget: target,
      umdNamedDefine: true,
    },
  };
};

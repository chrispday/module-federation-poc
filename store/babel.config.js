module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
  ignore: ["**/__snapshots__", "**/*.d.ts", "**/*.test.*"],
  plugins: [
    "@babel/plugin-transform-typescript",
    "babel-plugin-typescript-to-proptypes",
    "@babel/plugin-proposal-export-default-from",
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ts", ".tsx"],
        resolvePath(sourcePath, currentFile, opts) {
          if (sourcePath.includes("../assets/")) {
            return `../${sourcePath}`;
          }
          return false;
        },
      },
    ],
  ],
};

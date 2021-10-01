const deps = require("./package.json").dependencies;

module.exports = {
  name: "container",
  library: { type: "var", name: "container" },
  remotes: {
    app1: "app1",
    app2: "app2",
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      eager: true,
      requiredVersion: deps.react,
    },
    "react-dom": {
      singleton: true,
      eager: true,
      requiredVersion: deps["react-dom"],
    },
    "styled-components": {
      singleton: true,
      eager: true,
      requiredVersion: deps["styled-components"],
    },
    "@cmctechnology/phoenix-stockbroking-web-design": {
      singleton: true,
      eager: true,
      requiredVersion: deps["@cmctechnology/phoenix-stockbroking-web-design"],
    },
  },
};

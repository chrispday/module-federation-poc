const deps = require("./package.json").dependencies;

module.exports = {
  name: "app2",
  library: { type: "var", name: "app2" },
  filename: "remoteEntry.js",
  exposes: {
    // expose each component
    "./CounterAppTwo": "./src/components/CounterAppTwo",
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      eager: false,
      requiredVersion: deps.react,
    },
    "react-dom": {
      singleton: true,
      eager: false,
      requiredVersion: deps["react-dom"],
    },
    "styled-components": {
      singleton: true,
      eager: false,
      requiredVersion: deps["styled-components"],
    },
    "@cmctechnology/phoenix-stockbroking-web-design": {
      singleton: true,
      eager: false,
      requiredVersion: deps["@cmctechnology/phoenix-stockbroking-web-design"],
    },
  },
};

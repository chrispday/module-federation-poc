const deps = require("./package.json").dependencies;

module.exports = {
  name: "app1",
  library: { type: "var", name: "app1" },
  filename: "remoteEntry.js",
  exposes: {
    // expose each component
    "./CounterAppOne": "./src/components/CounterAppOne",
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

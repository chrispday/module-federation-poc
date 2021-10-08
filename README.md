Create CRA for "my-app" exposing component "MyComponent"

- `npx create-react-app my-app --template typescript --use-npm`
- `npm i react-scripts@next`
- `npm i -D @craco/craco craco-module-federation postcss-flexbugs-fixes postcss-normalize`
- install styled-components, "@cmctechnology/phoenix-stockbroking-web-design, etc
- create `./craco.config.js` and update port number

```
cracoModuleFederation = require("craco-module-federation");

module.exports = {
 plugins: [
   {
     plugin: cracoModuleFederation,
   },
 ],
 devServer: {
   port: 300X,
 },
};
```

- create `./modulefederation.config.js` and deps as required

```
const deps = require("./package.json").dependencies;

module.exports = {
  name: "my-app",
  library: { type: "var", name: "my-app" },
  filename: "remoteEntry.js",
  exposes: {
    // expose each component
    "./MyComponent": "./src/components/MyComponent",
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

```

- `npm run build`
- `npm run start`

const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'host-app',

  // exposes: {
  //   './Component': './projects/host-app/src/app/app.ts',
  // },

  remotes: {
    // "mfe-one": "http://localhost:4201/remoteEntry.js",
    // "mfe-two": "http://localhost:4202/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

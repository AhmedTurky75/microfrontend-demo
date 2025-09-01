const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe-one',

  exposes: {
    './Component': './projects/mfe-one/src/app/app.ts',
    './FeatureModule': './projects/mfe-one/src/app/feature.module.ts',

  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

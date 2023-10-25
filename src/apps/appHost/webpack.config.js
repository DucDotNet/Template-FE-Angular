const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
    // appAngularRemote: 'http://localhost:3000/remoteEntry.js',
  },

  // Explicitly share packages:
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },

  // Explicitly share mono-repo libs:
  sharedMappings: ['base-components-ant-design'],
});

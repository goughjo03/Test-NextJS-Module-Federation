/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf/lib/NextFederationPlugin");

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "remote",
          remotes: {
            // next1: `host@http://localhost:3000/_next/static/chunks/remoteEntry.js`,
          },
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./Button": "./components/Button.tsx",
          },
          shared: {
            // whatever else
          },
        })
      );
    }

    return config;
  },
};

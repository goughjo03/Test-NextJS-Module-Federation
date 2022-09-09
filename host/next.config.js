/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf/lib/NextFederationPlugin");

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "host",
          remotes: {
            remote: `remote@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
          },
        })
      );
    }

    return config;
  },
};

const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // TODO: production errors with TinyMCE when true
  webpack(config) {
    // TinyMCE
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.join(__dirname, "node_modules/tinymce"),
            to: path.join(__dirname, "public/assets/libs/tinymce"),
          },
        ],
      }),
    );
    return config;
  },
};

module.exports = nextConfig;

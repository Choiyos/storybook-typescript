const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin");

module.exports = {
  stories: ["../src/**/*.stories.(js|mdx|tsx)"],
  // 1. register the docs panel (as opposed to '@storybook/addon-docs' which
  //    will configure everything with a preset)
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        bableOptions: {},
        sourceLoaderOptions: null
      }
    },
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register"
  ],
};
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import glslify from "vite-plugin-glslify";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
  ],
  features: {
    // todo: finish migrating storybook:
    // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#storystorev7-enabled-by-default
    storyStoreV7: false,
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      plugins: [glslify()],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
        },
      },
    });
  },
};

export default config;

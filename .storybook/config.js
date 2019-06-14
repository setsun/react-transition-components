import { load } from "@storybook/react";
import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { DocsPage } from '@storybook/addon-docs/blocks';
import { addReadme } from 'storybook-readme';
import { themes } from '@storybook/theming';

const req = require.context('../src', true, /.stories.tsx$/);


addParameters({
  docs: DocsPage,
  info: {},
  options: {
    theme: themes.dark,
    panelPosition: 'right',
    sidebarAnimations: false,
  }
});

addDecorator(withKnobs);
addDecorator(addReadme);

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);

load(require.context('../src', true, /\.stories\.mdx$/), module);

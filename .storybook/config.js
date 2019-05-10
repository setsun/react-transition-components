import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { themes } from '@storybook/theming';

const req = require.context('../src/components', true, /.stories.tsx$/);

addParameters({
  info: {

  },
  options: {
    theme: themes.dark,
    panelPosition: 'right',
    sidebarAnimations: false,
  }
});

addDecorator(withKnobs);
addDecorator(withInfo);

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);

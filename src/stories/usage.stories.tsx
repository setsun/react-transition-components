import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean, radios } from '@storybook/addon-knobs';
import createTransition from '../createTransition';

const PanelViewerTransition = createTransition({
  from: { opacity: 0 },
  enter: ({ position: [top, right, bottom, left] }) => ({
    opacity: 1,
    clipPath: `inset(${top} ${right} ${bottom} ${left})`,
    transform: `translate(-${left}, -${top})`,
  })
});

const positions = [
  ['0%', '100%', '100%', '0%'],
  ['0%', '67%', '41%', '0%'],
  ['0%', '0%', '41%', '32%'],
  ['58.5%', '50.5%', '0%', '0%'],
  ['58.5%', '0%','0%', '49%']
];

const options = positions.reduce((acc, value, index) => ({
  ...acc,
  [index]: value
}), {});

const defaultValue = positions[1];

storiesOf('Example usage', module)
  .add('Comic book viewer', () => (
    <PanelViewerTransition
      in={boolean('in', true)}
      position={radios('Panels', options, defaultValue)}
    >
      {style => (
        <img
          src="https://i.imgur.com/rh8CFKF.jpg"
          style={{ ...style, width: '100%', height: 'auto' }}
        />
      )}
    </PanelViewerTransition>
  ))

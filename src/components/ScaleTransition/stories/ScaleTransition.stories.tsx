import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';

import ScaleTransition from '../';

const PlaceKitten = (props) => (
  <img src="https://placekitten.com/g/312/312" {...props} />
);

storiesOf('Scale Transition', module)
  .add('Scale', () => (
    <ScaleTransition
      in={boolean('in', true)}
      start={number('start', 0)}
      end={number('end', 1)}
      easing={text('easing', 'ease-in-out')}
      timeout={number('timeout', 300)}
    >
      <PlaceKitten />
    </ScaleTransition>
  ))

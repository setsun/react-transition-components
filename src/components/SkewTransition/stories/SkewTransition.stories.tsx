import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';

import SkewTransition from '../';

const PlaceKitten = (props) => (
  <img src="https://placekitten.com/g/312/312" {...props} />
);

storiesOf('Skew Transition', module)
  .add('Skew', () => (
    <SkewTransition
      in={boolean('in', true)}
      fade={boolean('fade', true)}
      x={{
        start: number('x.start', 45),
        end: number('x.end', 0),
      }}
      y={{
        start: number('y.start', 45),
        end: number('y.end', 0),
      }}
      easing={text('easing', 'ease-in-out')}
      timeout={number('timeout', 300)}
    >
      <PlaceKitten />
    </SkewTransition>
  ))

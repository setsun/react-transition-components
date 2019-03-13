import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import FadeTransition from '../';

const PlaceKitten = (props) => (
  <img src="https://placekitten.com/g/312/312" {...props} />
);

storiesOf('Fade Transition', module)
  .addDecorator(withKnobs)
  .add('Fade', () => (
    <FadeTransition
      in={boolean('in', true)}
      start={number('start', 0)}
      end={number('end', 1)}
      easing={text('easing', 'ease-in-out')}
      timeout={number('timeout', 300)}
    >
      <PlaceKitten />
    </FadeTransition>
  ))

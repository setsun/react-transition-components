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
      easing={text('easing', 'ease-in-out')}
      timeout={number('timeout', 300)}
    >
      <PlaceKitten />
    </FadeTransition>
  ))

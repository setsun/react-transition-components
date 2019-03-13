import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, radios } from '@storybook/addon-knobs';
import { directions } from '../../../types';

import FlipTransition from '../';

const PlaceKitten = (props) => (
  <img src="https://placekitten.com/g/312/312" {...props} />
);

const label = 'direction';
const options = directions
const defaultValue = directions.top;

storiesOf('Flip Transition', module)
  .addDecorator(withKnobs)
  .add('Flip', () => (
    <FlipTransition
      direction={radios(label, options, defaultValue)}
      in={boolean('in', true)}
      easing={text('easing', 'ease-in-out')}
      timeout={number('timeout', 300)}
    >
      <PlaceKitten />
    </FlipTransition>
  ));

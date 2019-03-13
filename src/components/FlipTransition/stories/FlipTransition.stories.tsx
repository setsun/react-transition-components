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
      in={boolean('in', true)}
      direction={radios(label, options, defaultValue)}
      start={number('start', 0.25)}
      end={number('end', 0)}
      easing={text('easing', 'ease-in-out')}
      timeout={number('timeout', 300)}
    >
      <PlaceKitten />
    </FlipTransition>
  ));

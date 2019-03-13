import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, radios } from '@storybook/addon-knobs';
import { directions } from '../../../types';

import SlideTransition from '../';

const PlaceKitten = (props) => (
  <img src="https://placekitten.com/g/312/312" {...props} />
);

const label = 'direction';
const options = directions
const defaultValue = directions.top;

storiesOf('Slide Transition', module)
  .addDecorator(withKnobs)
  .add('Slide', () => (
    <SlideTransition
      in={boolean('in', true)}
      direction={radios(label, options, defaultValue)}
      start={number('start', 16)}
      end={number('end', 0)}
      easing={text('easing', 'ease-in-out')}
      timeout={number('timeout', 300)}
    >
      <PlaceKitten />
    </SlideTransition>
  ));

import * as React from 'react';

import { storiesOf } from '@storybook/react';

import SlideTransition from '../';

const PlaceKitten = () => (
  <img src="https://placekitten.com/g/312/312" />
);

storiesOf('Slide Transition', module)
  .add('Slide (Top)', () => (
    <SlideTransition direction="top">
      {(state, style) => <PlaceKitten style={style} />}
    </SlideTransition>
  ))
  .add('Slide (Left)', () => (
    <SlideTransition direction="left">
      <PlaceKitten />
    </SlideTransition>
  ))
  .add('Slide (Right)', () => (
    <SlideTransition direction="right">
      <PlaceKitten />
    </SlideTransition>
  ))
  .add('Slide (Bottom)', () => (
    <SlideTransition direction="bottom">
      <PlaceKitten />
    </SlideTransition>
  ))

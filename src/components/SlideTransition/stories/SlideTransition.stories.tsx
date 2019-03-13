import * as React from 'react';

import { storiesOf } from '@storybook/react';

import SlideTransition from '../';

const PlaceKitten = (props) => (
  <img src="https://placekitten.com/g/312/312" {...props} />
);

storiesOf('Slide Transition', module)
  .add('Slide (Top)', () => (
    <SlideTransition direction="top">
      <PlaceKitten />
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

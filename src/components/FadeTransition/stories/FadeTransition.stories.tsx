import * as React from 'react';

import { storiesOf } from '@storybook/react';

import FlipTransition from '../';

const PlaceKitten = () => (
  <img src="https://placekitten.com/g/312/312" />
);

storiesOf('Flip Transition', module)
  .add('Flip (Top)', () => (
    <FlipTransition direction="top">
      <PlaceKitten />
    </FlipTransition>
  ))
  .add('Flip (Left)', () => (
    <FlipTransition direction="left">
      <PlaceKitten />
    </FlipTransition>
  ))
  .add('Flip (Right)', () => (
    <FlipTransition direction="right">
      <PlaceKitten />
    </FlipTransition>
  ))
  .add('Flip (Bottom)', () => (
    <FlipTransition direction="bottom">
      <PlaceKitten />
    </FlipTransition>
  ))

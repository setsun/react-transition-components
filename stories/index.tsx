import * as React from 'react';

import { storiesOf } from '@storybook/react';

import {
  FadeTransition,
  SlideTransition,
  FlipTransition,
  RotateTransition,
  ScaleTransition,
} from '../src/components';

import './index.css';

const PlaceKitten = () => (
  <img src="https://placekitten.com/g/312/312" />
);

storiesOf('Standard Transitions', module)
  .add('Fade', () => (
    <FadeTransition>
      <PlaceKitten />
    </FadeTransition>
  ))
  .add('Slide (Top)', () => (
    <SlideTransition direction="top">
      {(state, { style }) => <PlaceKitten style={style} />}
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
  .add('Rotate', () => (
    <RotateTransition>
      <PlaceKitten />
    </RotateTransition>
  ))
  .add('Scale', () => (
    <ScaleTransition>
      <PlaceKitten />
    </ScaleTransition>
  ))

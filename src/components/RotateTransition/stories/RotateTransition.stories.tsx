import * as React from 'react';

import { storiesOf } from '@storybook/react';

import RotateTransition from '../';

const PlaceKitten = () => (
  <img src="https://placekitten.com/g/312/312" />
);

storiesOf('Rotate Transition', module)
  .add('Rotate', () => (
    <RotateTransition>
      <PlaceKitten />
    </RotateTransition>
  ))

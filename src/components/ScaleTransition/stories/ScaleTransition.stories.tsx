import * as React from 'react';

import { storiesOf } from '@storybook/react';

import ScaleTransition from '../';

const PlaceKitten = () => (
  <img src="https://placekitten.com/g/312/312" />
);

storiesOf('Scale Transition', module)
  .add('Scale', () => (
    <ScaleTransition>
      <PlaceKitten />
    </ScaleTransition>
  ))

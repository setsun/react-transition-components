import * as React from 'react';

import { storiesOf } from '@storybook/react';

import RotateTransition from '../';

const PlaceKitten = (props) => (
  <img src="https://placekitten.com/g/312/312" {...props} />
);

storiesOf('Rotate Transition', module)
  .add('Rotate', () => (
    <RotateTransition>
      <PlaceKitten />
    </RotateTransition>
  ))

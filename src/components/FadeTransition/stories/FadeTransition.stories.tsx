import * as React from 'react';

import { storiesOf } from '@storybook/react';

import FadeTransition from '../';

const PlaceKitten = (props) => (
  <img src="https://placekitten.com/g/312/312" {...props} />
);

storiesOf('Fade Transition', module)
  .add('Fade', () => (
    <FadeTransition>
      <PlaceKitten />
    </FadeTransition>
  ))

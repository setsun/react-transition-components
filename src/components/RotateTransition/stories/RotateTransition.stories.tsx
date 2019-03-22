import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, number, object, radios } from '@storybook/addon-knobs';
import StoryPreview from '../../../story-components/Preview';

import RotateTransition, { presets } from '../';

const label = 'preset';
const options = presets;

storiesOf('Rotate Transition', module)
  .add('Rotate', () => (
    <RotateTransition
      in={boolean('in', true)}
      timeout={number('timeout', 300)}
      easing={text('easing', 'ease-in-out')}
      fade={boolean('fade', true)}
      preset={radios(label, options, undefined)}
      x={number('x', 0)}
      y={number('y', 0)}
      z={number('z', 1)}
      a={object('a', {
        start: 180,
        end: 0,
      })}
    >
      <StoryPreview />
    </RotateTransition>
  ))

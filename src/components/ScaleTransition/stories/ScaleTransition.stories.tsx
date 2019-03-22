import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, number, object } from '@storybook/addon-knobs';
import StoryPreview from '../../../story-components/Preview';

import ScaleTransition, { presets } from '../';

storiesOf('Scale Transition', module)
  .add('Scale', () => (
    <ScaleTransition
      in={boolean('in', true)}
      timeout={number('timeout', 300)}
      easing={text('easing', 'ease-in-out')}
      fade={boolean('fade', true)}
      x={object('x', {
        start: 0,
        end: 1,
      })}
      y={object('y', {
        start: 0,
        end: 1,
      })}
      z={object('z', {
        start: 0,
        end: 1,
      })}
    >
      <StoryPreview />
    </ScaleTransition>
  ))

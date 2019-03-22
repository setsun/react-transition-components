import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, number, object } from '@storybook/addon-knobs';
import StoryPreview from '../../../story-components/Preview';

import SkewTransition from '../';

storiesOf('Skew Transition', module)
  .add('Skew', () => (
    <SkewTransition
      in={boolean('in', true)}
      timeout={number('timeout', 300)}
      easing={text('easing', 'ease-in-out')}
      fade={boolean('fade', true)}
      x={object('x', {
        start: 45,
        end: 0,
      })}
      y={object('y', {
        start: 45,
        end: 0,
      })}
    >
      <StoryPreview />
    </SkewTransition>
  ))

import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, object } from '@storybook/addon-knobs';
import StoryPreview from '../../../story-components/Preview';

import SkewTransition from '../';

storiesOf('Skew Transition', module)
  .add('Skew', () => (
    <SkewTransition
      in={boolean('in', true)}
      fade={boolean('fade', true)}
      easing={text('easing', 'ease-in-out')}
      duration={object('duration', {
        enter: 300,
        exit: 300,
      })}
      delay={object('delay', {
        enter: 0,
        exit: 0,
      })}
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

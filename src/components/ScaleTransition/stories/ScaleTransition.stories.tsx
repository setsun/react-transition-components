import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, object } from '@storybook/addon-knobs';
import StoryPreview from '../../../story-components/Preview';

import ScaleTransition from '../';

storiesOf('Scale Transition', module)
  .add('Scale', () => (
    <ScaleTransition
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

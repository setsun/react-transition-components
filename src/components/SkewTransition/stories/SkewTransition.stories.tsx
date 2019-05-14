import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, object } from '@storybook/addon-knobs';
import StoryPreview from '../../../stories/components/Preview';

import SkewTransition from '../';

storiesOf('Components', module)
  .add('SkewTransition', () => (
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
        start: 30,
        end: 0,
      })}
      y={object('y', {
        start: 30,
        end: 0,
      })}
    >
      <StoryPreview />
    </SkewTransition>
  ))

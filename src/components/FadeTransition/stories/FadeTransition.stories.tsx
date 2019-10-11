import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, number, object } from '@storybook/addon-knobs';
import StoryPreview from '../../../stories/components/Preview';

import FadeTransition from '../';

storiesOf('Components', module)
  .add('FadeTransition', () => (
    <FadeTransition
      in={boolean('in', true)}
      easing={text('easing', 'ease-in-out')}
      duration={object('duration', {
        enter: 300,
        exit: 300,
      })}
      delay={object('delay', {
        enter: 0,
        exit: 0,
      })}
      start={number('start', 0)}
      end={number('end', 1)}
    >
      <StoryPreview />
    </FadeTransition>
  ))

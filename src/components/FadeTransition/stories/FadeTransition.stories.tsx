import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';
import StoryPreview from '../../../story-components/Preview';

import FadeTransition from '../';

storiesOf('Fade Transition', module)
  .add('Fade', () => (
    <FadeTransition
      in={boolean('in', true)}
      timeout={number('timeout', 300)}
      easing={text('easing', 'ease-in-out')}
      start={number('start', 0)}
      end={number('end', 1)}
    >
      <StoryPreview />
    </FadeTransition>
  ))

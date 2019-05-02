import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';
import StoryPreview from '../../../story-components/Preview';

import HeightTransition from '..';

storiesOf('Height Transition', module)
  .add('Height', () => (
    <HeightTransition
      in={boolean('in', true)}
      fade={boolean('fade', true)}
      timeout={number('timeout', 300)}
      easing={text('easing', 'ease-in-out')}
    >
      <StoryPreview />
    </HeightTransition>
  ))

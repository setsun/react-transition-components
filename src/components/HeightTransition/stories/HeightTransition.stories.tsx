import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, object } from '@storybook/addon-knobs';
import StoryPreview from '../../../story-components/Preview';

import HeightTransition from '..';

storiesOf('Height Transition', module)
  .add('Height', () => (
    <HeightTransition
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
    >
      <StoryPreview />
    </HeightTransition>
  ))

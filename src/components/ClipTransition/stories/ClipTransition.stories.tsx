import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, radios, object } from '@storybook/addon-knobs';
import StoryPreview from '../../../story-components/Preview';

import ClipTransition, { presets } from '../';

const label = 'preset';
const options = presets;

storiesOf('Clip Transition', module)
  .add('Clip', () => (
    <ClipTransition
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
      preset={radios(label, options, undefined)}
    >
      <StoryPreview />
    </ClipTransition>
  ))

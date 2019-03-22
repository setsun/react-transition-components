import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, number, object, radios } from '@storybook/addon-knobs';
import StoryPreview from '../../../story-components/Preview';

import TranslateTransition, { presets } from '..';

const label = 'preset';
const options = presets;

storiesOf('Translate Transition', module)
  .add('Translate', () => (
    <TranslateTransition
      in={boolean('in', true)}
      timeout={number('timeout', 300)}
      easing={text('easing', 'ease-in-out')}
      fade={boolean('fade', true)}
      preset={radios(label, options, undefined)}
      x={object('x', {
        start: 0,
        end: 0,
      })}
      y={object('y', {
        start: -16,
        end: 0,
      })}
      z={object('z', {
        start: 0,
        end: 0,
      })}
    >
      <StoryPreview />
    </TranslateTransition>
  ));

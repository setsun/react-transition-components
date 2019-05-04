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

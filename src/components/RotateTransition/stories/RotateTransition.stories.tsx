import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, number, object, radios } from '@storybook/addon-knobs';
import StoryPreview from '../../../stories/components/Preview';

import RotateTransition, { presets } from '../';

const label = 'preset';
const options = presets;

storiesOf('Components', module)
  .add('RotateTransition', () => (
    <RotateTransition
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
      x={number('x', 0)}
      y={number('y', 0)}
      z={number('z', 1)}
      a={object('a', {
        start: 90,
        end: 0,
      })}
    >
      <StoryPreview />
    </RotateTransition>
  ))

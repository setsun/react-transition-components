import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean, object } from '@storybook/addon-knobs';
import StoryPreview from '../../stories/components/Preview';

import createTransition from '../';

const ComplexTransition = createTransition({
  from: { transform: 'scale(0) skew(45deg)', clipPath: 'circle(0% at 50% 50%)' },
  enter: { transform: 'scale(1) skew(0deg)', clipPath: 'circle(100% at 50% 50%)' },
})

const AsymmetricTransition = createTransition({
  from: { transform: 'scale(0)', },
  enter: { transform: 'scale(1)', opacity: 1 },
  exit: { transform: 'rotate(180deg)', opacity: 0 },
})

storiesOf('createTransition', module)
  .add('Complex Custom Transition (clip-path / skew / scale)', () => (
    <ComplexTransition
      in={boolean('in', true)}
      duration={object('duration', {
        enter: 2000,
        exit: 2000,
      })}
    >
      <StoryPreview />
    </ComplexTransition>
  ))
  .add('Asymmetric enter / exit transitions', () => (
    <AsymmetricTransition
      in={boolean('in', true)}
      duration={object('duration', {
        enter: 500,
        exit: 500,
      })}
    >
      <StoryPreview />
    </AsymmetricTransition>
  ))

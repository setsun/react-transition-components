import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean, object, text } from '@storybook/addon-knobs';
import StoryPreview from '../../stories/components/Preview';

import createTransition from '../';

const crossBrowserClipPath = (value) => ({
  WebkitClipPath: value,
  clipPath: value,
});

const ComplexTransition = createTransition({
  from: { transform: 'scale(0) skew(45deg) rotate(180deg)', ...crossBrowserClipPath('circle(0% at 50% 50%)') },
  enter: { transform: 'scale(1) skew(0deg) rotate(0)',  ...crossBrowserClipPath('circle(100% at 50% 50%)') },
})

const AsymmetricTransition = createTransition({
  from: { transform: 'scale(0.5)', opacity: 0, ...crossBrowserClipPath('circle(100% at 50% 50%)') },
  enter: { transform: 'scale(1)', opacity: 1,  ...crossBrowserClipPath('circle(100% at 50% 50%)') },
  exit: { transform: 'scale(1)', opacity: 0,  ...crossBrowserClipPath('circle(0% at 50% 50%)') },
})

storiesOf('createTransition', module)
  .add('Complex CSS Transition (scale / skew / rotate / clip-path)', () => (
    <ComplexTransition
      in={boolean('in', true)}
      easing={text('easing', 'ease-in-out')}
      duration={object('duration', {
        enter: 3000,
        exit: 3000,
      })}
      delay={object('delay', {
        enter: 0,
        exit: 0,
      })}
    >
      <StoryPreview />
    </ComplexTransition>
  ))
  .add('Asymmetric enter & exit (scale / clip-path)', () => (
    <AsymmetricTransition
      in={boolean('in', true)}
      easing={text('easing', 'ease-in-out')}
      duration={object('duration', {
        enter: 500,
        exit: 750,
      })}
      delay={object('delay', {
        enter: 0,
        exit: 250,
      })}
    >
      <StoryPreview />
    </AsymmetricTransition>
  ))

import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, radios, object } from '@storybook/addon-knobs';
import StoryPreview from '../../../stories/components/Preview';

import ClipTransition, { shapes } from '../';
import Readme from '../README.md';

const label = 'shape';
const options = shapes;

storiesOf('Components', module)
  .add('ClipTransition', () => (
    <ClipTransition
      in={boolean('in', true)}
      easing={text('easing', 'ease-in-out')}
      duration={object('duration', {
        enter: 600,
        exit: 600,
      })}
      delay={object('delay', {
        enter: 0,
        exit: 0,
      })}
      shape={radios(label, options, shapes.circle)}
      circle={object('circle',  ClipTransition.defaultProps.circle)}
      ellipse={object('ellipse', ClipTransition.defaultProps.ellipse)}
      inset={object('inset', ClipTransition.defaultProps.inset)}
      polygon={object('polygon', {
        start: '50% 0%, 100% 50%, 50% 100%, 0% 50%',
        end: '100% 0%, 100% 100%, 0% 100%, 0% 0%',
      })}
    >
      <StoryPreview />
    </ClipTransition>
  ), {
    readme: {
      // Show readme at the addons panel
      sidebar: Readme,
    },
  })

import React from 'react';
import PropTypes from 'prop-types';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import FadeTransition from '../src/transitions/FadeTransition';
import FlipTransition from '../src/transitions/FlipTransition';
import ExpandTransition from '../src/transitions/ExpandTransition';
import ScaleTransition from '../src/transitions/ScaleTransition';
import SlideTransition from '../src/transitions/SlideTransition';
import RotateTransition from '../src/transitions/RotateTransition';

import TransitionGroupDecorator from './decorators/TransitionGroupDecorator';
import KatPersona from './components/KatPersona';
import WarningMessage from './components/WarningMessage';

import './index.css';

storiesOf('Standard Transitions', module)
  .addDecorator(TransitionGroupDecorator)
  .add('Fade', () => (
    <FadeTransition>
      <KatPersona />
    </FadeTransition>
  ))
  .add('Flip (Top)', () => (
    <FlipTransition direction="top">
      <KatPersona />
    </FlipTransition>
  ))
  .add('Flip (Left)', () => (
    <FlipTransition direction="left">
      <KatPersona />
    </FlipTransition>
  ))
  .add('Flip (Right)', () => (
    <FlipTransition direction="right">
      <KatPersona />
    </FlipTransition>
  ))
  .add('Flip (Bottom)', () => (
    <FlipTransition direction="bottom">
      <KatPersona />
    </FlipTransition>
  ))
  .add('Scale', () => (
    <ScaleTransition>
      <KatPersona />
    </ScaleTransition>
  ))
  .add('Expand (Top)', () => (
    <ExpandTransition direction="top">
      <WarningMessage />
    </ExpandTransition>
  ))
  .add('Expand (Left)', () => (
    <ExpandTransition direction="left">
      <WarningMessage />
    </ExpandTransition>
  ))
  .add('Expand (Right)', () => (
    <ExpandTransition direction="right">
      <WarningMessage />
    </ExpandTransition>
  ))
  .add('Expand (Bottom)', () => (
    <ExpandTransition direction="bottom">
      <WarningMessage />
    </ExpandTransition>
  ))
  .add('Rotate', () => (
    <RotateTransition>
      <KatPersona />
    </RotateTransition>
  ))
  .add('Slide (Top)', () => (
    <SlideTransition direction="top">
      <KatPersona />
    </SlideTransition>
  ))
  .add('Slide (Left)', () => (
    <SlideTransition direction="left">
      <KatPersona />
    </SlideTransition>
  ))
  .add('Slide (Right)', () => (
    <SlideTransition direction="right">
      <KatPersona />
    </SlideTransition>
  ))
  .add('Slide (Bottom)', () => (
    <SlideTransition direction="bottom">
      <KatPersona />
    </SlideTransition>
  ));

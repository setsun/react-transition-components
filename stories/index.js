import React from 'react';
import PropTypes from 'prop-types';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import TransitionGroupDecorator from './decorators/TransitionGroupDecorator';
import KatPersona from './components/KatPersona';
import WarningMessage from './components/WarningMessage';

import choreography, {
  opacity,
  translate,
  rotate,
  rotate3d,
  scale,
} from 'react-transition-factory';
import {
  FadeTransition,
  SlideTransition,
  ExpandTransition,
  FlipTransition,
  RotateTransition,
  ScaleTransition,
} from 'react-transition-components';

import './index.css';

const BatmanWipeTransition = choreography(opacity, rotate, scale.all);

storiesOf('Standard Transitions', module)
  .addDecorator(TransitionGroupDecorator)
  .add('Fade', () => (
    <FadeTransition>
      <KatPersona />
    </FadeTransition>
  ))
  .add('Slide (Top)', () => (
    <SlideTransition direction="top">
      {(state, { style }) => <KatPersona style={style} />}
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
  ))
  .add('Expand (Top)', () => (
    <ExpandTransition direction="top">
      <KatPersona />
    </ExpandTransition>
  ))
  .add('Expand (Left)', () => (
    <ExpandTransition direction="left">
      <KatPersona />
    </ExpandTransition>
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
  .add('Rotate', () => (
    <RotateTransition>
      <KatPersona />
    </RotateTransition>
  ))
  .add('Scale', () => (
    <ScaleTransition>
      <KatPersona />
    </ScaleTransition>
  ))

storiesOf('Composable Transitions with presets', module)
  .addDecorator(TransitionGroupDecorator)
  .add('Opacity, Rotate, Scale', () => (
    <BatmanWipeTransition>
      <img
        src="http://1000logos.net/wp-content/uploads/2016/10/Batman-symbol.jpg"
        style={{ width: '500px' }}
      />
    </BatmanWipeTransition>
  ));

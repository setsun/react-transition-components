import React from 'react';
import PropTypes from 'prop-types';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import FadeTransition from '../src/components/FadeTransition';
import FlipTransition from '../src/components/FlipTransition';
import ExpandTransition from '../src/components/ExpandTransition';
import ScaleTransition from '../src/components/ScaleTransition';
import SlideTransition from '../src/components/SlideTransition';
import RotateTransition from '../src/components/RotateTransition';

import TransitionGroupDecorator from './decorators/TransitionGroupDecorator';
import KatPersona from './components/KatPersona';
import WarningMessage from './components/WarningMessage';

import './index.css';
import transitionFactory from '../src/factory';
import { opacity, translate, rotate, scale } from '../src/presets/index';

const BatmanWipeTransition = transitionFactory([opacity, rotate, scale.all]);

const SwipeInTransition = transitionFactory(
  [
    {
      transition: 'max-width',
      getStartStyle: () => 0,
      getEndStyle: () => 400,
    },
  ],
  {
    overflow: 'hidden',
  }
);

storiesOf('Standard Transitions', module)
  .addDecorator(TransitionGroupDecorator)
  .add('Fade', () => (
    <FadeTransition
      onEnter={(...args) => console.log(args)}
      transitionId="fade-transition"
    >
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
  .add('Expand (Right)', () => (
    <ExpandTransition direction="right">
      <KatPersona />
    </ExpandTransition>
  ))
  .add('Expand (Bottom)', () => (
    <ExpandTransition direction="bottom">
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
  .add('Swipe (horizontal)', () => (
    <SwipeInTransition>
      <KatPersona />
    </SwipeInTransition>
  ));

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

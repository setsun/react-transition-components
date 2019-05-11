import * as React from 'react';
import anime from 'animejs';

import { storiesOf } from '@storybook/react';
import { boolean, object, radios } from '@storybook/addon-knobs';
import ClipTransition, { shapes } from '../components/ClipTransition';

import createTransition from '../createTransition';

const src = "https://static1.squarespace.com/static/593f201de3df288fc6465e6f/t/5b493eed2b6a28021458dd22/1531526904576/FullSizeRender-81.jpeg?format=750w"
const panelElement = (
  <img
    src={src}
    style={{ width: '100%', height: 'auto' }}
  />
)

const panelPositions = [
  '0% 0% 0% 0%',
  '0% 67% 41% 0%',
  '0% 0% 41% 32%',
  '58.5% 50.5% 0% 0%',
  '58.5% 0% 0% 49%',
];

const label = 'Panel Positions';
const options = panelPositions.reduce((acc, value, index) => ({
  ...acc,
  [index]: value
}), {});
const defaultValue = panelPositions[0];

storiesOf('Example usage', module)
  .add('Comic book viewer', () => (
    <ClipTransition
      in={boolean('in', true)}
      shape={shapes.inset}
      inset={{
        start: '0% 100% 100% 0%',
        end: radios(label, options, defaultValue)
      }}
    >
      {panelElement}
    </ClipTransition>
  ))

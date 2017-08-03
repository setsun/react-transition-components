import React from 'react';
import PropTypes from 'prop-types';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '@storybook/react/demo';

import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

import FadeTransition from '../src/transitions/FadeTransition';
import FlipTransition from '../src/transitions/FlipTransition';
import ExpandTransition from '../src/transitions/ExpandTransition';
import ScaleTransition from '../src/transitions/ScaleTransition';
import SlideTransition from '../src/transitions/SlideTransition';
import RotateTransition from '../src/transitions/RotateTransition';

import '../src/index.css';
import './index.css';

import SideCartExample from './components/SideCartExample';

const Image = ({ src }) =>
  <img
    style={{
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      borderWidth: '1px',
      borderColor: 'black',
      marginRight: '0.5rem',
    }}
    src={src}
  />;

const Kat = () =>
  <Image src="https://s-media-cache-ak0.pinimg.com/736x/bc/ec/7d/bcec7dac3022d86950e0d771b2bb3f96.jpg" />;

class TransitionGroupContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { active: true };
  }

  render() {
    const range = [...new Array(5)];

    return (
      <div>
        <Button onClick={() => this.setState({ active: !this.state.active })}>
          Toggle Animation
        </Button>
        <TransitionGroup>
          {this.state.active &&
            range.map((_, i) =>
              React.cloneElement(this.props.children, {
                key: `item-${i}`,
              }),
            )}
        </TransitionGroup>
      </div>
    );
  }
}

storiesOf('Standard Transitions', module)
  .add('Fade', () =>
    <TransitionGroupContainer>
      <FadeTransition>
        <Kat />
      </FadeTransition>
    </TransitionGroupContainer>,
  )
  .add('Flip (Normal)', () =>
    <TransitionGroupContainer>
      <FlipTransition>
        <Kat />
      </FlipTransition>
    </TransitionGroupContainer>,
  )
  .add('Flip (Reverse)', () =>
    <TransitionGroupContainer>
      <FlipTransition reverse>
        <Kat />
      </FlipTransition>
    </TransitionGroupContainer>,
  )
  .add('Scale', () =>
    <TransitionGroupContainer>
      <ScaleTransition>
        <Kat />
      </ScaleTransition>
    </TransitionGroupContainer>,
  )
  .add('Expand (Vertical)', () =>
    <TransitionGroupContainer>
      <ExpandTransition orientation="vertical">
        <Kat />
      </ExpandTransition>
    </TransitionGroupContainer>,
  )
  .add('Expand (Horizontal)', () =>
    <TransitionGroupContainer>
      <ExpandTransition orientation="horizontal">
        <Kat />
      </ExpandTransition>
    </TransitionGroupContainer>,
  )
  .add('Rotate', () =>
    <TransitionGroupContainer>
      <RotateTransition>
        <Kat />
      </RotateTransition>
    </TransitionGroupContainer>,
  )
  .add('Slide (Top)', () =>
    <TransitionGroupContainer>
      <SlideTransition direction="top">
        <Kat />
      </SlideTransition>
    </TransitionGroupContainer>,
  )
  .add('Slide (Left)', () =>
    <TransitionGroupContainer>
      <SlideTransition direction="left">
        <Kat />
      </SlideTransition>
    </TransitionGroupContainer>,
  )
  .add('Slide (Right)', () =>
    <TransitionGroupContainer>
      <SlideTransition direction="right">
        <Kat />
      </SlideTransition>
    </TransitionGroupContainer>,
  )
  .add('Slide (Bottom)', () =>
    <TransitionGroupContainer>
      <SlideTransition direction="bottom">
        <Kat />
      </SlideTransition>
    </TransitionGroupContainer>,
  );

storiesOf('Coordinated Animations', module).add('sequential animations', () =>
  <SideCartExample />,
);

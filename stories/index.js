import React from 'react';

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

import '../src/index.css';

class ButtonContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { active: true };
  }

  render() {
    const range = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    return (
      <div>
        <Button onClick={() => this.setState({ active: !this.state.active })}>
          Hello Button
        </Button>
        <TransitionGroup>
          {this.state.active &&
            range.map((_, i) =>
              <FlipTransition direction={'top'} key={`item-${i}`}>
                <Button
                  onClick={() => this.setState({ active: !this.state.active })}
                >
                  Hello Button
                </Button>
              </FlipTransition>,
            )}
        </TransitionGroup>
      </div>
    );
  }
}

storiesOf('Transitions', module).add('Fade', () => <ButtonContainer />);

// @flow

import React from 'react';
import transitionFactory, { rotate3d } from 'react-transition-factory';
import type { TransitionProps } from '../../factory/src/types/index';

type FlipTransitionProps = TransitionProps & {
  direction: string,
};

const FlipTopTransition = transitionFactory(rotate3d.top);
FlipTopTransition.staticStyles = {
  transformOrigin: 'top',
};

const FlipBottomTransition = transitionFactory(rotate3d.bottom);
FlipBottomTransition.staticStyles = {
  transformOrigin: 'bottom',
};

const FlipLeftTransition = transitionFactory(rotate3d.left);
FlipLeftTransition.staticStyles = {
  transformOrigin: 'left',
};

const FlipRightTransition = transitionFactory(rotate3d.right);
FlipRightTransition.staticStyles = {
  transformOrigin: 'right',
};

class FlipTransition extends React.Component<FlipTransitionProps> {
  static defaultProps = {
    direction: 'left',
  };

  render() {
    const { direction, ...rest } = this.props;

    switch (direction) {
      case 'left':
        return <FlipLeftTransition {...rest} />;
      case 'right':
        return <FlipRightTransition {...rest} />;
      case 'top':
        return <FlipTopTransition {...rest} />;
      case 'bottom':
        return <FlipBottomTransition {...rest} />;
    }
  }
}

export default FlipTransition;

// @flow

import React from 'react';
import transitionFactory from '../factory';
import { rotate3d } from '../presets';
import type { TransitionProps } from '../types/index';

type FlipTransitionProps = TransitionProps & {
  direction: string,
};

const FlipTopTransition = transitionFactory([rotate3d.top], {
  transformOrigin: 'top',
});

const FlipBottomTransition = transitionFactory([rotate3d.bottom], {
  transformOrigin: 'bottom',
});

const FlipLeftTransition = transitionFactory([rotate3d.left], {
  transformOrigin: 'left',
});

const FlipRightTransition = transitionFactory([rotate3d.right], {
  transformOrigin: 'right',
});

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

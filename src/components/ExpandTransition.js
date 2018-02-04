// @flow

import React from 'react';
import transitionFactory from '../factory';
import { scale } from '../presets';
import type { TransitionProps } from '../types/index';

type ExpandTransitionProps = TransitionProps & {
  direction: string,
};

const ExpandTopTransition = transitionFactory([scale.vertical], {
  transformOrigin: 'top',
});

const ExpandBottomTransition = transitionFactory([scale.vertical], {
  transformOrigin: 'bottom',
});

const ExpandLeftTransition = transitionFactory([scale.horizontal], {
  transformOrigin: 'left',
});

const ExpandRightTransition = transitionFactory([scale.horizontal], {
  transformOrigin: 'right',
});

class ExpandTransition extends React.Component<ExpandTransitionProps> {
  static defaultProps = {
    direction: 'left',
  };

  render() {
    const { direction, ...rest } = this.props;

    switch (direction) {
      case 'left':
        return <ExpandLeftTransition {...rest} />;
      case 'right':
        return <ExpandRightTransition {...rest} />;
      case 'top':
        return <ExpandTopTransition {...rest} />;
      case 'bottom':
        return <ExpandBottomTransition {...rest} />;
    }
  }
}

export default ExpandTransition;

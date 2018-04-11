// @flow

import React from 'react';
import transitionFactory, { scale } from 'react-transition-factory';
import type { TransitionProps } from 'react-transition-factory';

type ExpandTransitionProps = TransitionProps & {
  direction: string,
};

const ExpandTopTransition = transitionFactory(scale.vertical);
ExpandTopTransition.defaultProps = {
  ...ExpandTopTransition.defaultProps,
  style: { transformOrigin: 'top' },
};

const ExpandBottomTransition = transitionFactory(scale.vertical);
ExpandBottomTransition.defaultProps = {
  ...ExpandBottomTransition.defaultProps,
  style: { transformOrigin: 'bottom' },
};

const ExpandLeftTransition = transitionFactory(scale.horizontal);
ExpandLeftTransition.defaultProps = {
  ...ExpandLeftTransition.defaultProps,
  style: { transformOrigin: 'left' },
};

const ExpandRightTransition = transitionFactory(scale.horizontal);
ExpandRightTransition.defaultProps = {
  ...ExpandRightTransition.defaultProps,
  style: { transformOrigin: 'right' },
};

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

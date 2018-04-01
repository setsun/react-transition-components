// @flow

import React from 'react';
import transitionFactory, { scale } from 'react-transition-factory';
import type { TransitionProps } from '../../factory/src/types/index';

type ExpandTransitionProps = TransitionProps & {
  direction: string,
};

const ExpandTopTransition = transitionFactory(scale.vertical);
ExpandTopTransition.staticStyles = {
  transformOrigin: 'top',
};

const ExpandBottomTransition = transitionFactory(scale.vertical);
ExpandBottomTransition.staticStyles = {
  transformOrigin: 'bottom',
}

const ExpandLeftTransition = transitionFactory(scale.horizontal);
ExpandLeftTransition.staticStyles = {
  transformOrigin: 'left',
};


const ExpandRightTransition = transitionFactory(scale.horizontal);
ExpandRightTransition.staticStyles = {
  transformOrigin: 'right',
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

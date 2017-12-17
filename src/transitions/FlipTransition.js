import React from 'react';
import transitionFactory from './transitionFactory';

const FlipLeftTransition = transitionFactory([
  {
    transitionName: 'transform',
    getEnterStyle: (start = 0.25) => `rotate3d(0, 1, 0, ${start}turn)`,
    getExitStyle: (end = 0) => `rotate3d(0, 1, 0, ${end}turn)`,
  },
]);

const FlipRightTransition = transitionFactory([
  {
    transitionName: 'transform',
    getEnterStyle: (start = 0.25) => `rotate3d(0, 1, 0, -${start}turn)`,
    getExitStyle: (end = 0) => `rotate3d(0, 1, 0, ${end}turn)`,
  },
]);

const FlipTopTransition = transitionFactory([
  {
    transitionName: 'transform',
    getEnterStyle: (start = 0.25) => `rotate3d(1, 0, 0, ${start}turn)`,
    getExitStyle: (end = 0) => `rotate3d(1, 0, 0, ${end}turn)`,
  },
]);

const FlipBottomTransition = transitionFactory([
  {
    transitionName: 'transform',
    getEnterStyle: (start = 0.25) => `rotate3d(1, 0, 0, -${start}turn)`,
    getExitStyle: (end = 0) => `rotate3d(1, 0, 0, ${end}turn)`,
  },
]);

class FlipTransition extends React.Component {
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

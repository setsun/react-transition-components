import React from 'react';
import transitionFactory from './transitionFactory';

const baseTransform = {
  transitionName: 'transform',
  start: 0.25,
  end: 0,
};

const FlipLeftTransition = transitionFactory([
  {
    ...baseTransform,
    getEnterStyle: start => `rotate3d(0, 1, 0, ${start}turn)`,
    getExitStyle: end => `rotate3d(0, 1, 0, ${end}turn)`,
  },
]);

const FlipRightTransition = transitionFactory([
  {
    ...baseTransform,
    getEnterStyle: start => `rotate3d(0, 1, 0, -${start}turn)`,
    getExitStyle: end => `rotate3d(0, 1, 0, ${end}turn)`,
  },
]);

const FlipTopTransition = transitionFactory([
  {
    ...baseTransform,
    getEnterStyle: start => `rotate3d(1, 0, 0, ${start}turn)`,
    getExitStyle: end => `rotate3d(1, 0, 0, ${end}turn)`,
  },
]);

const FlipBottomTransition = transitionFactory([
  {
    ...baseTransform,
    getEnterStyle: start => `rotate3d(1, 0, 0, -${start}turn)`,
    getExitStyle: end => `rotate3d(1, 0, 0, ${end}turn)`,
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

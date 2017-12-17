import React from 'react';
import choreography from '../decorator/choreography';

const FlipLeftTransition = choreography([
  {
    transition: 'transform',
    getStartStyle: (start = 0.25) => `rotate3d(0, 1, 0, ${start}turn)`,
    getEndStyle: (end = 0) => `rotate3d(0, 1, 0, ${end}turn)`,
  },
]);

const FlipRightTransition = choreography([
  {
    transition: 'transform',
    getStartStyle: (start = 0.25) => `rotate3d(0, 1, 0, -${start}turn)`,
    getEndStyle: (end = 0) => `rotate3d(0, 1, 0, ${end}turn)`,
  },
]);

const FlipTopTransition = choreography([
  {
    transition: 'transform',
    getStartStyle: (start = 0.25) => `rotate3d(1, 0, 0, ${start}turn)`,
    getEndStyle: (end = 0) => `rotate3d(1, 0, 0, ${end}turn)`,
  },
]);

const FlipBottomTransition = choreography([
  {
    transition: 'transform',
    getStartStyle: (start = 0.25) => `rotate3d(1, 0, 0, -${start}turn)`,
    getEndStyle: (end = 0) => `rotate3d(1, 0, 0, ${end}turn)`,
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

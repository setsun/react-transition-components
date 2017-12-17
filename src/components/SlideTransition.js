import React from 'react';
import choreography from '../decorator/choreography';

const opacityTransition = {
  transition: 'opacity',
  getStartStyle: (start = 0) => start,
  getEndStyle: (end = 1) => end,
};

const SlideTopTransition = choreography([
  {
    transition: 'transform',
    getStartStyle: (start = 16) => `translate(0, -${start}px)`,
    getEndStyle: (end = 0) => `translate(0, ${end}px)`,
  },
  opacityTransition,
]);

const SlideBottomTransition = choreography([
  {
    transition: 'transform',
    getStartStyle: (start = 16) => `translate(0, ${start}px)`,
    getEndStyle: (end = 0) => `translate(0, ${end}px)`,
  },
  opacityTransition,
]);
const SlideLeftTransition = choreography([
  {
    transition: 'transform',
    getStartStyle: (start = 16) => `translate(-${start}px, 0)`,
    getEndStyle: (end = 0) => `translate(${end}px, 0)`,
  },
  opacityTransition,
]);
const SlideRightTransition = choreography([
  {
    transition: 'transform',
    getStartStyle: (start = 16) => `translate(${start}px, 0)`,
    getEndStyle: (end = 0) => `translate(${end}px, 0)`,
  },
  opacityTransition,
]);

class SlideTransition extends React.Component {
  static defaultProps = {
    direction: 'left',
  };

  render() {
    const { direction, ...rest } = this.props;

    switch (direction) {
      case 'left':
        return <SlideLeftTransition {...rest} />;
      case 'right':
        return <SlideRightTransition {...rest} />;
      case 'top':
        return <SlideTopTransition {...rest} />;
      case 'bottom':
        return <SlideBottomTransition {...rest} />;
    }
  }
}

export default SlideTransition;

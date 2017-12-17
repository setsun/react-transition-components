import React from 'react';
import transitionFactory from './transitionFactory';

const opacityTransition = {
  transitionName: 'opacity',
  getEnterStyle: (start = 0) => start,
  getExitStyle: (end = 1) => end,
};

const SlideTopTransition = transitionFactory([
  {
    transitionName: 'transform',
    getEnterStyle: (start = 16) => `translate(0, -${start}px)`,
    getExitStyle: (end = 0) => `translate(0, ${end}px)`,
  },
  opacityTransition,
]);

const SlideBottomTransition = transitionFactory([
  {
    transitionName: 'transform',
    getEnterStyle: (start = 16) => `translate(0, ${start}px)`,
    getExitStyle: (end = 0) => `translate(0, ${end}px)`,
  },
  opacityTransition,
]);
const SlideLeftTransition = transitionFactory([
  {
    transitionName: 'transform',
    getEnterStyle: (start = 16) => `translate(-${start}px, 0)`,
    getExitStyle: (end = 0) => `translate(${end}px, 0)`,
  },
  opacityTransition,
]);
const SlideRightTransition = transitionFactory([
  {
    transitionName: 'transform',
    getEnterStyle: (start = 16) => `translate(${start}px, 0)`,
    getExitStyle: (end = 0) => `translate(${end}px, 0)`,
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

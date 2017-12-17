import React from 'react';
import transitionFactory from './transitionFactory';

const baseTransform = {
  transitionName: 'transform',
  start: 16,
  end: 0,
};

const opacityTransition = {
  transitionName: 'opacity',
  start: 0,
  end: 1,
  getEnterStyle: start => start,
  getExitStyle: end => end,
};

const SlideTopTransition = transitionFactory([
  {
    ...baseTransform,
    getEnterStyle: start => `translate(0, -${start}px)`,
    getExitStyle: end => `translate(0, ${end}px)`,
  },
  opacityTransition,
]);

const SlideBottomTransition = transitionFactory([
  {
    ...baseTransform,
    getEnterStyle: start => `translate(0, ${start}px)`,
    getExitStyle: end => `translate(0, ${end}px)`,
  },
  opacityTransition,
]);
const SlideLeftTransition = transitionFactory([
  {
    ...baseTransform,
    getEnterStyle: start => `translate(-${start}px, 0)`,
    getExitStyle: end => `translate(${end}px, 0)`,
  },
  opacityTransition,
]);
const SlideRightTransition = transitionFactory([
  {
    ...baseTransform,
    getEnterStyle: start => `translate(${start}px, 0)`,
    getExitStyle: end => `translate(${end}px, 0)`,
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

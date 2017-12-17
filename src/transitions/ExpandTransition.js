import React from 'react';
import transitionFactory from './transitionFactory';

const ExpandTopTransition = transitionFactory(
  [
    {
      transitionName: 'transform',
      getEnterStyle: (start = 0) => `scaleY(${start})`,
      getExitStyle: (end = 1) => `scaleY(${end})`,
    },
  ],
  {
    transformOrigin: 'top',
  }
);

const ExpandBottomTransition = transitionFactory(
  [
    {
      transitionName: 'transform',
      getEnterStyle: (start = 0) => `scaleY(${start})`,
      getExitStyle: (end = 1) => `scaleY(${end})`,
    },
  ],
  {
    transformOrigin: 'bottom',
  }
);

const ExpandLeftTransition = transitionFactory(
  [
    {
      transitionName: 'transform',
      getEnterStyle: (start = 0) => `scaleX(${start})`,
      getExitStyle: (end = 1) => `scaleX(${end})`,
    },
  ],
  {
    transformOrigin: 'left',
  }
);

const ExpandRightTransition = transitionFactory(
  [
    {
      transitionName: 'transform',
      getEnterStyle: (start = 0) => `scaleX(${start})`,
      getExitStyle: (end = 1) => `scaleX(${end})`,
    },
  ],
  {
    transformOrigin: 'right',
  }
);

class ExpandTransition extends React.Component {
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

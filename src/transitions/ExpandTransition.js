import React from 'react';
import transitionFactory from './transitionFactory';

const baseTransform = {
  transitionName: 'transform',
  start: 0,
  end: 1,
};

const ExpandTopTransition = transitionFactory(
  [
    {
      ...baseTransform,
      getEnterStyle: start => `scaleY(${start})`,
      getExitStyle: end => `scaleY(${end})`,
    },
  ],
  {
    transformOrigin: 'top',
  }
);

const ExpandBottomTransition = transitionFactory(
  [
    {
      ...baseTransform,
      getEnterStyle: start => `scaleY(${start})`,
      getExitStyle: end => `scaleY(${end})`,
    },
  ],
  {
    transformOrigin: 'bottom',
  }
);

const ExpandLeftTransition = transitionFactory(
  [
    {
      ...baseTransform,
      getEnterStyle: start => `scaleX(${start})`,
      getExitStyle: end => `scaleX(${end})`,
    },
  ],
  {
    transformOrigin: 'left',
  }
);

const ExpandRightTransition = transitionFactory(
  [
    {
      ...baseTransform,
      getEnterStyle: start => `scaleX(${start})`,
      getExitStyle: end => `scaleX(${end})`,
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

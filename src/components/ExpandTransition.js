import React from 'react';
import choreography from '../decorator/choreography';

const ExpandTopTransition = choreography(
  [
    {
      transition: 'transform',
      getStartStyle: (start = 0) => `scaleY(${start})`,
      getEndStyle: (end = 1) => `scaleY(${end})`,
    },
  ],
  {
    transformOrigin: 'top',
  }
);

const ExpandBottomTransition = choreography(
  [
    {
      transition: 'transform',
      getStartStyle: (start = 0) => `scaleY(${start})`,
      getEndStyle: (end = 1) => `scaleY(${end})`,
    },
  ],
  {
    transformOrigin: 'bottom',
  }
);

const ExpandLeftTransition = choreography(
  [
    {
      transition: 'transform',
      getStartStyle: (start = 0) => `scaleX(${start})`,
      getEndStyle: (end = 1) => `scaleX(${end})`,
    },
  ],
  {
    transformOrigin: 'left',
  }
);

const ExpandRightTransition = choreography(
  [
    {
      transition: 'transform',
      getStartStyle: (start = 0) => `scaleX(${start})`,
      getEndStyle: (end = 1) => `scaleX(${end})`,
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

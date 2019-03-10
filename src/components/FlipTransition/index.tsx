import * as React from 'react';
import createTransition from '../../createTransition';
import { rotate3d } from '../../presets';
import { TransitionProps } from '../../types';;
import { directions } from '../constants';

type FlipTransitionProps = TransitionProps & {
  direction: directions,
};

const FlipTopTransition = createTransition(rotate3d.top);
FlipTopTransition.defaultProps = {
  ...FlipTopTransition.defaultProps,
  style: { transformOrigin: 'top', perspectiveOrigin: 'top', perspective: '0' },
};

const FlipBottomTransition = createTransition(rotate3d.bottom);
FlipBottomTransition.defaultProps = {
  ...FlipBottomTransition.defaultProps,
  style: { transformOrigin: 'bottom', perspectiveOrigin: 'bottom', perspective: '0' },
};

const FlipLeftTransition = createTransition(rotate3d.left);
FlipLeftTransition.defaultProps = {
  ...FlipLeftTransition.defaultProps,
  style: { transformOrigin: 'left', perspectiveOrigin: 'left', perspective: '0' },
};

const FlipRightTransition = createTransition(rotate3d.right);
FlipRightTransition.defaultProps = {
  ...FlipRightTransition.defaultProps,
  style: { transformOrigin: 'right', perspectiveOrigin: 'right', perspective: '0' },
};

class FlipTransition extends React.Component<FlipTransitionProps> {
  static defaultProps = {
    direction: directions.left,
  };

  render() {
    const { direction, ...rest } = this.props;

    switch (direction) {
      case directions.left:
        return <FlipLeftTransition {...rest} />;
      case directions.right:
        return <FlipRightTransition {...rest} />;
      case directions.top:
        return <FlipTopTransition {...rest} />;
      case directions.bottom:
        return <FlipBottomTransition {...rest} />;
    }
  }
}

export default FlipTransition;

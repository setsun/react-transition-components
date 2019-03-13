import * as React from 'react';
import createTransition from '../../createTransition';
import { TransitionComponentProps, directions } from '../../types';

type Props = TransitionComponentProps & {
  direction: directions
}

const defaultStyles = {
  top: { transformOrigin: 'top', perspectiveOrigin: 'top', perspective: '0' },
  bottom: { transformOrigin: 'bottom', perspectiveOrigin: 'bottom', perspective: '0' },
  left: { transformOrigin: 'left', perspectiveOrigin: 'left', perspective: '0' },
  right: { transformOrigin: 'right', perspectiveOrigin: 'right', perspective: '0' }
};

const transitionStyles = {
  top: {
    entering: { transform: 'rotate3d(1, 0, 0, 0.25turn)' },
    entered: { transform: 'rotate3d(1, 0, 0, 0turn)' },
    exiting: { transform: 'rotate3d(1, 0, 0, 0.25turn)' },
    exited: { transform: 'rotate3d(1, 0, 0, 0.25turn)' },
  },
  bottom: {
    entering: { transform: 'rotate3d(1, 0, 0, -0.25turn)' },
    entered: { transform: 'rotate3d(1, 0, 0, 0turn)' },
    exiting: { transform: 'rotate3d(1, 0, 0, -0.25turn)' },
    exited: { transform: 'rotate3d(1, 0, 0, -0.25turn)' },
  },
  left: {
    entering: { transform: 'rotate3d(0, 1, 0, 0.25turn)' },
    entered: { transform: 'rotate3d(0, 1, 0, 0turn)' },
    exiting: { transform: 'rotate3d(0, 1, 0, 0.25turn)' },
    exited: { transform: 'rotate3d(0, 1, 0, 0.25turn)' },
  },
  right: {
    entering: { transform: 'rotate3d(0, 1, 0, -0.25turn)' },
    entered: { transform: 'rotate3d(0, 1, 0, 0turn)' },
    exiting: { transform: 'rotate3d(0, 1, 0, -0.25turn)' },
    exited: { transform: 'rotate3d(0, 1, 0, -0.25turn)' },
  },
};

const transitionProperty = 'transform';

const FlipTopTransition = createTransition(
  transitionStyles.top,
  defaultStyles.top,
  transitionProperty,
);

const FlipBottomTransition = createTransition(
  transitionStyles.bottom,
  defaultStyles.bottom,
  transitionProperty,
);

const FlipLeftTransition = createTransition(
  transitionStyles.left,
  defaultStyles.left,
  transitionProperty,
);

const FlipRightTransition = createTransition(
  transitionStyles.right,
  defaultStyles.right,
  transitionProperty,
);

const Components = {
  top: FlipTopTransition,
  bottom: FlipBottomTransition,
  left: FlipLeftTransition,
  right: FlipRightTransition,
};

const FlipTransition = ({
  direction,
  children,
  ...rest
}: Props) => {
  const TransitionComponent = Components[direction];

  return (
    <TransitionComponent {...rest}>
      {children}
    </TransitionComponent>
  );
}

FlipTransition.defaultProps = {
  direction: directions.left,
}

export default FlipTransition;

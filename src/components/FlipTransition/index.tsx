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
  top: ({ start, end }) => ({
    entering: { transform: `rotate3d(1, 0, 0, ${start}turn)`, opacity: 0 },
    entered: { transform: `rotate3d(1, 0, 0, ${end}turn)`, opacity: 1 },
    exiting: { transform: `rotate3d(1, 0, 0, ${start}turn)`, opacity: 0 },
    exited: { transform: `rotate3d(1, 0, 0, ${start}turn)`, opacity: 0 },
  }),
  bottom: ({ start, end }) => ({
    entering: { transform: `rotate3d(1, 0, 0, -${start}turn)`, opacity: 0 },
    entered: { transform: `rotate3d(1, 0, 0, ${end}turn)`, opacity: 1 },
    exiting: { transform: `rotate3d(1, 0, 0, -${start}turn)`, opacity: 0 },
    exited: { transform: `rotate3d(1, 0, 0, -${start}turn)`, opacity: 0 },
  }),
  left: ({ start, end }) => ({
    entering: { transform: `rotate3d(0, 1, 0, ${start}turn)`, opacity: 0 },
    entered: { transform: `rotate3d(0, 1, 0, ${end}turn)`, opacity: 1 },
    exiting: { transform: `rotate3d(0, 1, 0, ${start}turn)`, opacity: 0 },
    exited: { transform: `rotate3d(0, 1, 0, ${start}turn)`, opacity: 0 },
  }),
  right: ({ start, end }) => ({
    entering: { transform: `rotate3d(0, 1, 0, -${start}turn)`, opacity: 0 },
    entered: { transform: `rotate3d(0, 1, 0, ${end}turn)`, opacity: 1 },
    exiting: { transform: `rotate3d(0, 1, 0, -${start}turn)`, opacity: 0 },
    exited: { transform: `rotate3d(0, 1, 0, -${start}turn)`, opacity: 0 },
  }),
};

const FlipTopTransition = createTransition(
  transitionStyles.top,
  defaultStyles.top,
);

const FlipBottomTransition = createTransition(
  transitionStyles.bottom,
  defaultStyles.bottom,
);

const FlipLeftTransition = createTransition(
  transitionStyles.left,
  defaultStyles.left,
);

const FlipRightTransition = createTransition(
  transitionStyles.right,
  defaultStyles.right,
);

const Components = {
  top: FlipTopTransition,
  bottom: FlipBottomTransition,
  left: FlipLeftTransition,
  right: FlipRightTransition,
};

const FlipTransition = ({
  children,
  ...rest
}: Props) => {
  const TransitionComponent = Components[rest.direction];

  return (
    <TransitionComponent {...rest}>
      {children}
    </TransitionComponent>
  );
}

FlipTransition.defaultProps = {
  direction: directions.left,
  start: 0.25,
  end: 0,
}

export default FlipTransition;

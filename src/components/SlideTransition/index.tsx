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
    entering: { transform: 'translate(0, -16px)', opacity: 0 },
    entered: { transform: 'translate(0, 0)', opacity: 1 },
    exiting: { transform: 'translate(0, 0)', opacity: 1 },
    exited: { transform: 'translate(0, -16px)', opacity: 0 },
  },
  bottom: {
    entering: { transform: 'translate(0, 16px)', opacity: 0 },
    entered: { transform: 'translate(0, 0)', opacity: 1 },
    exiting: { transform: 'translate(0, 0)', opacity: 1 },
    exited: { transform: 'translate(0, 16px)', opacity: 0 },
  },
  left: {
    entering: { transform: 'translate(-16px, 0)', opacity: 0 },
    entered: { transform: 'translate(0, 0)', opacity: 1 },
    exiting: { transform: 'translate(0, 0)', opacity: 1 },
    exited: { transform: 'translate(-16px, 0)', opacity: 0 },
  },
  right: {
    entering: { transform: 'translate(16px, 0)', opacity: 0 },
    entered: { transform: 'translate(0, 0)', opacity: 1 },
    exiting: { transform: 'translate(0, 0)', opacity: 1 },
    exited: { transform: 'translate(16px, 0)', opacity: 0 },
  },
};

const transitionProperty = 'transform';

const SlideTopTransition = createTransition(
  defaultStyles.top,
  transitionStyles.top,
  transitionProperty,
);

const SlideBottomTransition = createTransition(
  defaultStyles.bottom,
  transitionStyles.bottom,
  transitionProperty,
);

const SlideLeftTransition = createTransition(
  defaultStyles.left,
  transitionStyles.left,
  transitionProperty,
);

const SlideRightTransition = createTransition(
  defaultStyles.right,
  transitionStyles.right,
  transitionProperty,
);

const Components = {
  top: SlideTopTransition,
  bottom: SlideBottomTransition,
  left: SlideLeftTransition,
  right: SlideRightTransition,
};

const SlideTransition = ({
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

SlideTransition.defaultProps = {
  direction: directions.top,
}

export default SlideTransition;

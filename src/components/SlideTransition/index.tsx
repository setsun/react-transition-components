import * as React from 'react';
import createTransition from '../../createTransition';
import { TransitionComponentProps, directions } from '../../types';

type Props = TransitionComponentProps & {
  direction: directions
}

const defaultStyles = {
  top: { transform: 'translate(0, -16px)', opacity: 0 },
  bottom: { transform: 'translate(0, 16px)', opacity: 0 },
  left: { transform: 'translate(-16px, 0)', opacity: 0 },
  right: { transform: 'translate(16px, 0)', opacity: 0 },
};

const transitionStyles = {
  top: {
    entering: { transform: 'translate(0, -16px)', opacity: 0 },
    entered: { transform: 'translate(0, 0)', opacity: 1 },
    exiting: { transform: 'translate(0, -16px)', opacity: 0 },
    exited: { transform: 'translate(0, -16px)', opacity: 0 },
  },
  bottom: {
    entering: { transform: 'translate(0, 16px)', opacity: 0 },
    entered: { transform: 'translate(0, 0)', opacity: 1 },
    exiting: { transform: 'translate(0, 16px)', opacity: 0 },
    exited: { transform: 'translate(0, 16px)', opacity: 0 },
  },
  left: {
    entering: { transform: 'translate(-16px, 0)', opacity: 0 },
    entered: { transform: 'translate(0, 0)', opacity: 1 },
    exiting: { transform: 'translate(-16px, 0)', opacity: 0 },
    exited: { transform: 'translate(-16px, 0)', opacity: 0 },
  },
  right: {
    entering: { transform: 'translate(16px, 0)', opacity: 0 },
    entered: { transform: 'translate(0, 0)', opacity: 1 },
    exiting: { transform: 'translate(16px, 0)', opacity: 0 },
    exited: { transform: 'translate(16px, 0)', opacity: 0 },
  },
};


const SlideTopTransition = createTransition(
  transitionStyles.top,
  defaultStyles.top,
);

const SlideBottomTransition = createTransition(
  transitionStyles.bottom,
  defaultStyles.bottom,
);

const SlideLeftTransition = createTransition(
  transitionStyles.left,
  defaultStyles.left,
);

const SlideRightTransition = createTransition(
  transitionStyles.right,
  defaultStyles.right,
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

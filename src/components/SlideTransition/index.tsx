import * as React from 'react';
import createTransition from '../../createTransition';
import { TransitionComponentProps, directions } from '../../types';

type Props = TransitionComponentProps & {
  direction: directions
}

const transitionStyles = {
  top: ({ start, end }) => ({
    entering: { transform: `translate(0, -${start}px)`, opacity: 0 },
    entered: { transform: `translate(0, ${end}px)`, opacity: 1 },
    exiting: { transform: `translate(0, -${start}px)`, opacity: 0 },
    exited: { transform: `translate(0, -${start}px)`, opacity: 0 },
  }),
  bottom: ({ start, end }) => ({
    entering: { transform: `translate(0, ${start}px)`, opacity: 0 },
    entered: { transform: `translate(0, ${end}px)`, opacity: 1 },
    exiting: { transform: `translate(0, ${start}px)`, opacity: 0 },
    exited: { transform: `translate(0, ${start}px)`, opacity: 0 },
  }),
  left: ({ start, end }) => ({
    entering: { transform: `translate(-${start}px, 0)`, opacity: 0 },
    entered: { transform: `translate(0, ${end}px)`, opacity: 1 },
    exiting: { transform: `translate(-${start}px, 0)`, opacity: 0 },
    exited: { transform: `translate(-${start}px, 0)`, opacity: 0 },
  }),
  right: ({ start, end }) => ({
    entering: { transform: `translate(${start}px, 0)`, opacity: 0 },
    entered: { transform: `translate(0, ${end}px)`, opacity: 1 },
    exiting: { transform: `translate(${start}px, 0)`, opacity: 0 },
    exited: { transform: `translate(${start}px, 0)`, opacity: 0 },
  }),
};


const SlideTopTransition = createTransition(
  transitionStyles.top,
);

const SlideBottomTransition = createTransition(
  transitionStyles.bottom,
);

const SlideLeftTransition = createTransition(
  transitionStyles.left,
);

const SlideRightTransition = createTransition(
  transitionStyles.right,
);

const Components = {
  top: SlideTopTransition,
  bottom: SlideBottomTransition,
  left: SlideLeftTransition,
  right: SlideRightTransition,
};

const SlideTransition = ({
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

SlideTransition.defaultProps = {
  direction: directions.top,
  start: 16,
  end: 0,
}

export default SlideTransition;

import transitionFactory from './transitionFactory';

const initialStyle = {
  top: {
    transform: 'translate(0, -16px)',
    opacity: 0,
  },
  bottom: {
    transform: 'translate(0, 16px)',
    opacity: 0,
  },
  left: {
    transform: 'translate(-16px, 0)',
    opacity: 0,
  },
  right: {
    transform: 'translate(16px, 0)',
    opacity: 0,
  },
};

const transitionStyles = {
  top: {
    entering: { transform: 'translate(0, -16px)', opacity: 0 },
    entered: { transform: 'translate(0)', opacity: 1 },
    exiting: { transform: 'translate(0, -16px)', opacity: 0 },
  },
  bottom: {
    entering: { transform: 'translate(0, 16px)', opacity: 0 },
    entered: { transform: 'translate(0)', opacity: 1 },
    exiting: { transform: 'translate(0, 16px)', opacity: 0 },
  },
  left: {
    entering: { transform: 'translate(-16px, 0)', opacity: 0 },
    entered: { transform: 'translate(0)', opacity: 1 },
    exiting: { transform: 'translate(-16px, 0)', opacity: 0 },
  },
  right: {
    entering: { transform: 'translate(16px, 0)', opacity: 0 },
    entered: { transform: 'translate(0)', opacity: 1 },
    exiting: { transform: 'translate(16px, 0)', opacity: 0 },
  },
};

const SlideTransition = transitionFactory(
  (duration, easing) =>
    `transform ${duration}ms ${easing}, opacity ${duration}ms ${easing}`,
  ({ direction }) => initialStyle[direction] || initialStyle.top,
  ({ direction }) => transitionStyles[direction] || transitionStyles.top
);

SlideTransition.displayName = 'SlideTransition';

export default SlideTransition;

import transitionFactory from './transitionFactory';

const initialStyle = {
  left: {
    transform: 'rotate3d(0, 1, 0, 90deg)',
  },
  right: {
    transform: 'rotate3d(0, 1, 0, -90deg)',
  },
  top: {
    transform: 'rotate3d(1, 0, 0, 90deg)',
  },
  bottom: {
    transform: 'rotate3d(1, 0, 0, -90deg)',
  },
};

const transitionStyles = {
  left: {
    entering: { transform: 'rotate3d(0, 1, 0, 90deg)' },
    entered: { transform: 'rotate3d(0, 1, 0, 0deg)' },
    exiting: { transform: 'rotate3d(0, 1, 0, 90deg)' },
  },
  right: {
    entering: { transform: 'rotate3d(0, 1, 0, -90deg)' },
    entered: { transform: 'rotate3d(0, 1, 0, 0deg)' },
    exiting: { transform: 'rotate3d(0, 1, 0, -90deg)' },
  },
  top: {
    entering: { transform: 'rotate3d(1, 0, 0, 90deg)' },
    entered: { transform: 'rotate3d(1, 0, 0, 0deg)' },
    exiting: { transform: 'rotate3d(1, 0, 0, 90deg)' },
  },
  bottom: {
    entering: { transform: 'rotate3d(1, 0, 0, -90deg)' },
    entered: { transform: 'rotate3d(1, 0, 0, 0deg)' },
    exiting: { transform: 'rotate3d(1, 0, 0, -90deg)' },
  },
};

const FlipTransition = transitionFactory(
  (duration, easing) => `transform ${duration}ms ${easing}`,
  ({ direction = 'left' }) => initialStyle[direction],
  ({ direction = 'left' }) => transitionStyles[direction]
);

FlipTransition.displayName = 'FlipTransition';

export default FlipTransition;

import transitionFactory from './transitionFactory';

const initialStyle = {
  left: {
    transform: 'rotate3d(0, 1, 0, 90deg)',
    opacity: 0,
  },
  right: {
    transform: 'rotate3d(0, 1, 0, -90deg)',
    opacity: 0,
  },
  top: {
    transform: 'rotate3d(1, 0, 0, 90deg)',
    opacity: 0,
  },
  bottom: {
    transform: 'rotate3d(1, 0, 0, -90deg)',
    opacity: 0,
  },
};

const transitionStyles = {
  left: {
    entering: { transform: 'rotate3d(0, 1, 0, 90deg)', opacity: 0 },
    entered: { transform: 'rotate3d(0, 1, 0, 0deg)', opacity: 1 },
    exiting: { transform: 'rotate3d(0, 1, 0, 90deg)', opacity: 0 },
  },
  right: {
    entering: { transform: 'rotate3d(0, 1, 0, -90deg)', opacity: 0 },
    entered: { transform: 'rotate3d(0, 1, 0, 0deg)', opacity: 1 },
    exiting: { transform: 'rotate3d(0, 1, 0, -90deg)', opacity: 0 },
  },
  top: {
    entering: { transform: 'rotate3d(1, 0, 0, 90deg)', opacity: 0 },
    entered: { transform: 'rotate3d(1, 0, 0, 0deg)', opacity: 1 },
    exiting: { transform: 'rotate3d(1, 0, 0, 90deg)', opacity: 0 },
  },
  bottom: {
    entering: { transform: 'rotate3d(1, 0, 0, -90deg)', opacity: 0 },
    entered: { transform: 'rotate3d(1, 0, 0, 0deg)', opacity: 1 },
    exiting: { transform: 'rotate3d(1, 0, 0, -90deg)', opacity: 0 },
  },
};

const FlipTransition = transitionFactory(
  (duration, easing) =>
    `transform ${duration}ms ${easing}, opacity ${duration}ms ${easing}`,
  ({ direction = 'left' }) => initialStyle[direction],
  ({ direction = 'left' }) => transitionStyles[direction]
);

FlipTransition.displayName = 'FlipTransition';

export default FlipTransition;

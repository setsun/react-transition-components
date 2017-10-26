import transitionFactory from './transitionFactory';

// TODO: Configure for top, left, right, bottom

const initialStyle = {
  transformOrigin: 'top',
  transform: 'rotate3d(0, 1, 0, -90deg)',
  opacity: 0,
};

const transitionStyles = {
  entering: { transform: 'rotate3d(0, 1, 0, -90deg)', opacity: 0 },
  entered: { transform: 'rotate3d(0, 1, 0, 0deg)', opacity: 1 },
  exiting: { transform: 'rotate3d(0, 1, 0, -90deg)', opacity: 0 },
};

const FlipTransition = transitionFactory(
  (duration, easing) =>
    `transform ${duration}ms ${easing}, opacity ${duration}ms ${easing}`,
  initialStyle,
  transitionStyles
);

FlipTransition.displayName = 'FlipTransition';

export default FlipTransition;

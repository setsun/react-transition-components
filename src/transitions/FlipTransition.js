import transitionFactory from './transitionFactory';

const getInitialStyle = ({ startValue = 90, direction = 'left' }) =>
  ({
    left: {
      transform: `rotate3d(0, 1, 0, ${startValue}deg)`,
    },
    right: {
      transform: `rotate3d(0, 1, 0, -${startValue}deg)`,
    },
    top: {
      transform: `rotate3d(1, 0, 0, ${startValue}deg)`,
    },
    bottom: {
      transform: `rotate3d(1, 0, 0, -${startValue}deg)`,
    },
  }[direction]);

const getTransitionStyles = ({
  startValue = 90,
  endValue = 0,
  direction = 'left',
}) =>
  ({
    left: {
      entering: { transform: `rotate3d(0, 1, 0, ${startValue}deg)` },
      entered: { transform: `rotate3d(0, 1, 0, ${endValue}deg)` },
      exiting: { transform: `rotate3d(0, 1, 0, ${startValue}deg)` },
    },
    right: {
      entering: { transform: `rotate3d(0, 1, 0, -${startValue}deg)` },
      entered: { transform: `rotate3d(0, 1, 0, ${endValue}deg)` },
      exiting: { transform: `rotate3d(0, 1, 0, -${startValue}deg)` },
    },
    top: {
      entering: { transform: `rotate3d(1, 0, 0, ${startValue}deg)` },
      entered: { transform: `rotate3d(1, 0, 0, ${endValue}deg)` },
      exiting: { transform: `rotate3d(1, 0, 0, ${startValue}deg)` },
    },
    bottom: {
      entering: { transform: `rotate3d(1, 0, 0, -${startValue}deg)` },
      entered: { transform: `rotate3d(1, 0, 0, ${endValue}deg)` },
      exiting: { transform: `rotate3d(1, 0, 0, -${startValue}deg)` },
    },
  }[direction]);

const FlipTransition = transitionFactory(
  (duration, easing) => `transform ${duration}ms ${easing}`,
  getInitialStyle,
  getTransitionStyles
);

FlipTransition.displayName = 'FlipTransition';

export default FlipTransition;

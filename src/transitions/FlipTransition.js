import transitionFactory from './transitionFactory';

const getTransition = (duration, easing) => `transform ${duration}ms ${easing}`;

const getInitialStyle = ({ startValue = 0.25, direction = 'left' }) =>
  ({
    left: {
      transform: `rotate3d(0, 1, 0, ${startValue}turn)`,
    },
    right: {
      transform: `rotate3d(0, 1, 0, -${startValue}turn)`,
    },
    top: {
      transform: `rotate3d(1, 0, 0, ${startValue}turn)`,
    },
    bottom: {
      transform: `rotate3d(1, 0, 0, -${startValue}turn)`,
    },
  }[direction]);

const getTransitionStyles = ({
  startValue = 0.25,
  endValue = 0,
  direction = 'left',
}) =>
  ({
    left: {
      entering: { transform: `rotate3d(0, 1, 0, ${startValue}turn)` },
      entered: { transform: `rotate3d(0, 1, 0, ${endValue}turn)` },
      exiting: { transform: `rotate3d(0, 1, 0, ${startValue}turn)` },
    },
    right: {
      entering: { transform: `rotate3d(0, 1, 0, -${startValue}turn)` },
      entered: { transform: `rotate3d(0, 1, 0, ${endValue}turn)` },
      exiting: { transform: `rotate3d(0, 1, 0, -${startValue}turn)` },
    },
    top: {
      entering: { transform: `rotate3d(1, 0, 0, ${startValue}turn)` },
      entered: { transform: `rotate3d(1, 0, 0, ${endValue}turn)` },
      exiting: { transform: `rotate3d(1, 0, 0, ${startValue}turn)` },
    },
    bottom: {
      entering: { transform: `rotate3d(1, 0, 0, -${startValue}turn)` },
      entered: { transform: `rotate3d(1, 0, 0, ${endValue}turn)` },
      exiting: { transform: `rotate3d(1, 0, 0, -${startValue}turn)` },
    },
  }[direction]);

const FlipTransition = transitionFactory(
  getTransition,
  getInitialStyle,
  getTransitionStyles
);

FlipTransition.displayName = 'FlipTransition';

export default FlipTransition;

import transitionFactory from './transitionFactory';

const getInitialStyle = ({ startValue = 180 }) => ({
  transform: `rotate(${startValue}deg)`,
  opacity: 0,
});

const getTransitionStyles = ({ startValue = 180, endValue = 360 }) => ({
  entering: { opacity: 0, transform: `rotate(${startValue}deg)` },
  entered: { opacity: 1, transform: `rotate(${endValue}deg)` },
  exiting: { opacity: 0, transform: `rotate(${startValue}deg)` },
});

const RotateTransition = transitionFactory(
  (duration, easing) =>
    `transform ${duration}ms ${easing}, opacity ${duration}ms ${easing}`,
  getInitialStyle,
  getTransitionStyles
);

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

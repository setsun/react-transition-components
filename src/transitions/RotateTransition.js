import transitionFactory from './transitionFactory';

const getTransition = (duration, easing) =>
  `transform ${duration}ms ${easing}, opacity ${duration}ms ${easing}`;

const getInitialStyle = ({ startValue = 0.5 }) => ({
  transform: `rotate(${startValue}turn)`,
  opacity: 0,
});

const getTransitionStyles = ({ startValue = 0.5, endValue = 1 }) => ({
  entering: { opacity: 0, transform: `rotate(${startValue}turn)` },
  entered: { opacity: 1, transform: `rotate(${endValue}turn)` },
  exiting: { opacity: 0, transform: `rotate(${startValue}turn)` },
});

const RotateTransition = transitionFactory(
  getTransition,
  getInitialStyle,
  getTransitionStyles
);

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

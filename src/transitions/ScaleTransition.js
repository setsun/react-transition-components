import transitionFactory from './transitionFactory';

const getTransition = (duration, easing) => `transform ${duration}ms ${easing}`;

const getInitialStyle = ({ startValue = 0 }) => ({
  transform: `scale(${startValue})`,
});

const getTransitionStyles = ({ startValue = 0, endValue = 1 }) => ({
  entering: { transform: `scale(${startValue})` },
  entered: { transform: `scale(${endValue})` },
  exiting: { transform: `scale(${startValue})` },
});

const ScaleTransition = transitionFactory(
  getTransition,
  getInitialStyle,
  getTransitionStyles
);

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

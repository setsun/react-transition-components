import transitionFactory from './transitionFactory';

const getInitialStyle = ({ startValue = 0 }) => ({
  transform: `scale(${startValue})`,
});

const getTransitionStyles = ({ startValue = 0, endValue = 1 }) => ({
  entering: { transform: `scale(${startValue})` },
  entered: { transform: `scale(${endValue})` },
  exiting: { transform: `scale(${startValue})` },
});

const ScaleTransition = transitionFactory(
  (duration, easing) => `transform ${duration}ms ${easing}`,
  getInitialStyle,
  getTransitionStyles
);

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

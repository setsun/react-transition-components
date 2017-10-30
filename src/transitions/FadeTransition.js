import transitionFactory from './transitionFactory';

const getInitialStyle = ({ startValue = 0 }) => ({
  opacity: startValue,
});

const getTransitionStyles = ({ startValue = 0, endValue = 1 }) => ({
  entering: { opacity: startValue },
  entered: { opacity: endValue },
  exiting: { opacity: startValue },
});

const FadeTransition = transitionFactory(
  (duration, easing) => `opacity ${duration}ms ${easing}`,
  getInitialStyle,
  getTransitionStyles
);

FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;

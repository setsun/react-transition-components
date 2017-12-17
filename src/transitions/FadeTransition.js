import transitionFactory from './transitionFactory';

const getTransition = (duration, easing) => `opacity ${duration}ms ${easing}`;

const getInitialStyle = ({ startValue = 0 }) => ({
  opacity: startValue,
});

const getTransitionStyles = ({ startValue = 0, endValue = 1 }) => ({
  entering: { opacity: startValue },
  entered: { opacity: endValue },
  exiting: { opacity: startValue },
});

const FadeTransition = transitionFactory(
  getTransition,
  getInitialStyle,
  getTransitionStyles
);

FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;

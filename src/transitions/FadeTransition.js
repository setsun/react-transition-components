import transitionFactory from './transitionFactory';

const initialStyle = {
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
};

const FadeTransition = transitionFactory(
  (duration, easing) => `opacity ${duration}ms ${easing}`,
  () => initialStyle,
  () => transitionStyles
);

FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;

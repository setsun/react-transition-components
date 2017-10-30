import transitionFactory from './transitionFactory';

const initialStyle = {
  transform: 'scale(0)',
};

const transitionStyles = {
  entering: { transform: 'scale(0)' },
  entered: { transform: 'scale(1)' },
  exiting: { transform: 'scale(0)' },
};

const ScaleTransition = transitionFactory(
  (duration, easing) => `transform ${duration}ms ${easing}`,
  props => initialStyle,
  props => transitionStyles
);

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

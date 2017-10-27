import transitionFactory from './transitionFactory';

const initialStyle = {
  transform: 'scale(0)',
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0, transform: 'scale(0)' },
  entered: { opacity: 1, transform: 'scale(1)' },
  exiting: { opacity: 0, transform: 'scale(0)' },
};

const ScaleTransition = transitionFactory(
  (duration, easing) =>
    `transform ${duration}ms ${easing}, opacity ${duration}ms ${easing}`,
  props => initialStyle,
  props => transitionStyles
);

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

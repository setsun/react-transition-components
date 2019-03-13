import createTransition from '../../createTransition';

const defaultStyle = {
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const transitionProperty = 'opacity';

const FadeTransition = createTransition(
  defaultStyle,
  transitionStyles,
  transitionProperty,
);

FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;

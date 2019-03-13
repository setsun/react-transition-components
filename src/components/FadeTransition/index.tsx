import createTransition from '../../createTransition';

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const defaultStyle = {};

const transitionProperty = 'opacity';

const FadeTransition = createTransition(
  transitionStyles,
  defaultStyle,
  transitionProperty,
);

FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;

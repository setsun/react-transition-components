import createTransition from '../../createTransition';

const transitionStyles = {
  entering: { transform: 'scale(0)' },
  entered: { transform: 'scale(1)' },
  exiting: { transform: 'scale(0)' },
  exited: { transform: 'scale(0)'},
};

const defaultStyle = {};

const transitionProperty = 'transform';

const ScaleTransition = createTransition(
  transitionStyles,
  defaultStyle,
  transitionProperty,
);

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

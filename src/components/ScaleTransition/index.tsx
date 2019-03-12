import createTransition from '../../createTransition';

const defaultStyle = {
  transform: 'scale(0)',
};

const transitionStyles = {
  entering: { transform: 'scale(0)' },
  entered: { transform: 'scale(1)' },
  exiting: { transform: 'scale(1)' },
  exited: { transform: 'scale(0)'},
};

const transitionProperty = 'transform';

const ScaleTransition = createTransition(
  defaultStyle,
  transitionStyles,
  transitionProperty,
);

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

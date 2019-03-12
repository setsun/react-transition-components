import createTransition from '../../createTransition';

const defaultStyle = {
  transform: 'rotate(0)',
};

const transitionStyles = {
  entering: { transform: 'rotate(0)' },
  entered: { transform: 'rotate(1turn)' },
  exiting: { transform: 'rotate(1turn)' },
  exited: { transform: 'rotate(0)'},
};

const transitionProperty = 'transform';

const RotateTransition = createTransition(
  defaultStyle,
  transitionStyles,
  transitionProperty,
);

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

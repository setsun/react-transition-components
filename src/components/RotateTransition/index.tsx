import createTransition from '../../createTransition';

const defaultStyle = {
  transform: 'rotate(0)',
  opacity: 0,
};

const transitionStyles = {
  entering: { transform: 'rotate(0)', opacity: 0 },
  entered: { transform: 'rotate(1turn)', opacity: 1, },
  exiting: { transform: 'rotate(1turn)', opacity: 1 },
  exited: { transform: 'rotate(0)', opacity: 0 },
};

const transitionProperty = 'all';

const RotateTransition = createTransition(
  defaultStyle,
  transitionStyles,
  transitionProperty,
);

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

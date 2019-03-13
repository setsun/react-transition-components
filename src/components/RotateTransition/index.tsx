import createTransition from '../../createTransition';

const transitionStyles = {
  entering: { transform: 'rotate(0)', opacity: 0 },
  entered: { transform: 'rotate(1turn)', opacity: 1, },
  exiting: { transform: 'rotate(0turn)', opacity: 0 },
  exited: { transform: 'rotate(0)', opacity: 0 },
};

const RotateTransition = createTransition(
  transitionStyles,
);

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

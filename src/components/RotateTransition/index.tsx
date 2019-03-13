import createTransition from '../../createTransition';

const transitionStyles = ({ start, end }) => ({
  entering: { transform: `rotate(${start}turn)`, opacity: 0 },
  entered: { transform: `rotate(${end}turn)`, opacity: 1, },
  exiting: { transform: `rotate(${start}turn)`, opacity: 0 },
  exited: { transform: `rotate(${start}turn)`, opacity: 0 },
});

const RotateTransition = createTransition(
  transitionStyles,
);

RotateTransition.defaultProps = {
  start: 0.5,
  end: 0,
};

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

import transitionFactory from './transitionFactory';

const initialStyle = {
  horizontal: {
    transformOrigin: 'top',
    transform: 'scaleY(0)',
    opacity: 0,
  },
  vertical: {
    transformOrigin: 'left',
    transform: 'scaleX(0)',
    opacity: 0,
  },
};

const transitionStyles = {
  horizontal: {
    entering: { transform: 'scaleY(0)', opacity: 0 },
    entered: { transform: 'scaleY(1)', opacity: 1 },
    exiting: { transform: 'scaleY(0)', opacity: 0 },
  },
  vertical: {
    entering: { transform: 'scaleX(0)', opacity: 0 },
    entered: { transform: 'scaleX(1)', opacity: 1 },
    exiting: { transform: 'scaleX(0)', opacity: 0 },
  },
};

const ExpandTransition = transitionFactory(
  (duration, easing) =>
    `transform ${duration}ms ${easing}, opacity ${duration}ms ${easing}`,
  ({ orientation = 'horizontal' }) => initialStyle[orientation],
  ({ orientation = 'horizontal' }) => transitionStyles[orientation]
);

ExpandTransition.displayName = 'ExpandTransition';

export default ExpandTransition;

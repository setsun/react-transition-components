import transitionFactory from './transitionFactory';

const initialStyle = {
  top: {
    transformOrigin: 'top',
    transform: 'scaleY(0)',
    opacity: 0,
  },
  bottom: {
    transformOrigin: 'bottom',
    transform: 'scaleY(0)',
    opacity: 0,
  },
  left: {
    transformOrigin: 'left',
    transform: 'scaleX(0)',
    opacity: 0,
  },
  right: {
    transformOrigin: 'right',
    transform: 'scaleX(0)',
    opacity: 0,
  },
};

const transitionStyles = {
  top: {
    entering: { transform: 'scaleY(0)', opacity: 0 },
    entered: { transform: 'scaleY(1)', opacity: 1 },
    exiting: { transform: 'scaleY(0)', opacity: 0 },
  },
  bottom: {
    entering: { transform: 'scaleY(0)', opacity: 0 },
    entered: { transform: 'scaleY(1)', opacity: 1 },
    exiting: { transform: 'scaleY(0)', opacity: 0 },
  },
  left: {
    entering: { transform: 'scaleX(0)', opacity: 0 },
    entered: { transform: 'scaleX(1)', opacity: 1 },
    exiting: { transform: 'scaleX(0)', opacity: 0 },
  },
  right: {
    entering: { transform: 'scaleX(0)', opacity: 0 },
    entered: { transform: 'scaleX(1)', opacity: 1 },
    exiting: { transform: 'scaleX(0)', opacity: 0 },
  },
};

const ExpandTransition = transitionFactory(
  (duration, easing) =>
    `transform ${duration}ms ${easing}, opacity ${duration}ms ${easing}`,
  ({ direction }) => initialStyle[direction] || initialStyle.top,
  ({ direction }) => transitionStyles[direction] || transitionStyles.top
);

ExpandTransition.displayName = 'ExpandTransition';

export default ExpandTransition;

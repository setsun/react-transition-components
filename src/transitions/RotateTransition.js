import transitionFactory from './transitionFactory';

const initialStyle = {
  transform: 'rotate(180deg)',
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0, transform: 'rotate(180deg)' },
  entered: { opacity: 1, transform: 'rotate(360deg)' },
  exiting: { opacity: 0, transform: 'rotate(180deg)' },
};

const RotateTransition = transitionFactory(
  (duration, easing) =>
    `transform ${duration}ms ${easing}, opacity ${duration}ms ${easing}`,
  initialStyle,
  transitionStyles
);

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

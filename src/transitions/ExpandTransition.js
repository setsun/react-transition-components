import transitionFactory from './transitionFactory';

// TODO: Configure for vertical and horizontal

const initialStyle = {
  transformOrigin: 'top',
  transform: 'scaleY(0)',
  opacity: 0,
};

const transitionStyles = {
  entering: { transform: 'scaleY(0)', opacity: 0 },
  entered: { transform: 'scaleY(1)', opacity: 1 },
  exiting: { transform: 'scaleY(0)', opacity: 0 },
};

const ExpandTransition = transitionFactory(
  (duration, easing) =>
    `transform ${duration}ms ${easing}, opacity ${duration}ms ${easing}`,
  initialStyle,
  transitionStyles
);

ExpandTransition.displayName = 'ExpandTransition';

export default ExpandTransition;

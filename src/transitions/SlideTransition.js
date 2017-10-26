import transitionFactory from './transitionFactory';

// TODO: Configure for top, left, right, bottom

const initialStyle = {
  transform: 'translate(0, -16px)',
  opacity: 0,
};

const transitionStyles = {
  entering: { transform: 'translate(0, -16px)', opacity: 0 },
  entered: { transform: 'translate(0)', opacity: 1 },
  exiting: { transform: 'translate(0, -16px)', opacity: 0 },
};

const SlideTransition = transitionFactory(
  (duration, easing) =>
    `transform ${duration}ms ${easing}, opacity ${duration}ms ${easing}`,
  initialStyle,
  transitionStyles
);

SlideTransition.displayName = 'SlideTransition';

export default SlideTransition;

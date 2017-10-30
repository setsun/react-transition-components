import transitionFactory from './transitionFactory';

const getInitialStyle = ({ startValue = 16, direction = 'top' }) =>
  ({
    top: {
      transform: `translate(0, -${startValue}px)`,
      opacity: 0,
    },
    bottom: {
      transform: `translate(0, ${startValue}px)`,
      opacity: 0,
    },
    left: {
      transform: `translate(-${startValue}px, 0)`,
      opacity: 0,
    },
    right: {
      transform: `translate(${startValue}px, 0)`,
      opacity: 0,
    },
  }[direction]);

const getTransitionStyles = ({
  startValue = 16,
  endValue = 0,
  direction = 'top',
}) =>
  ({
    top: {
      entering: { transform: `translate(0, -${startValue}px)`, opacity: 0 },
      entered: { transform: `translate(0, ${endValue}px)`, opacity: 1 },
      exiting: { transform: `translate(0, -${startValue}px)`, opacity: 0 },
    },
    bottom: {
      entering: { transform: `translate(0, ${startValue}px)`, opacity: 0 },
      entered: { transform: `translate(0, ${endValue}px)`, opacity: 1 },
      exiting: { transform: `translate(0, ${startValue}px)`, opacity: 0 },
    },
    left: {
      entering: { transform: `translate(-${startValue}px, 0)`, opacity: 0 },
      entered: { transform: `translate(${endValue}px, 0)`, opacity: 1 },
      exiting: { transform: `translate(-${startValue}px, 0)`, opacity: 0 },
    },
    right: {
      entering: { transform: `translate(${startValue}px, 0)`, opacity: 0 },
      entered: { transform: `translate(${endValue}px, 0)`, opacity: 1 },
      exiting: { transform: `translate(${startValue}px, 0)`, opacity: 0 },
    },
  }[direction]);

const SlideTransition = transitionFactory(
  (duration, easing) =>
    `transform ${duration}ms ${easing}, opacity ${duration}ms ${easing}`,
  getInitialStyle,
  getTransitionStyles
);

SlideTransition.displayName = 'SlideTransition';

export default SlideTransition;

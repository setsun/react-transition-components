import transitionFactory from './transitionFactory';

const getInitialStyle = ({ startValue = 0, direction = 'top' }) =>
  ({
    top: {
      transformOrigin: 'top',
      transform: `scaleY(${startValue})`,
    },
    bottom: {
      transformOrigin: 'bottom',
      transform: `scaleY(${startValue})`,
    },
    left: {
      transformOrigin: 'left',
      transform: `scaleX(${startValue})`,
    },
    right: {
      transformOrigin: 'right',
      transform: `scaleX(${startValue})`,
    },
  }[direction]);

const getTransitionStyles = ({
  startValue = 0,
  endValue = 1,
  direction = 'top',
}) =>
  ({
    top: {
      entering: { transform: `scaleY(${startValue})` },
      entered: { transform: `scaleY(${endValue})` },
      exiting: { transform: `scaleY(${startValue})` },
    },
    bottom: {
      entering: { transform: `scaleY(${startValue})` },
      entered: { transform: `scaleY(${endValue})` },
      exiting: { transform: `scaleY(${startValue})` },
    },
    left: {
      entering: { transform: `scaleX(${startValue})` },
      entered: { transform: `scaleX(${endValue})` },
      exiting: { transform: `scaleX(${startValue})` },
    },
    right: {
      entering: { transform: `scaleX(${startValue})` },
      entered: { transform: `scaleX(${endValue})` },
      exiting: { transform: `scaleX(${startValue})` },
    },
  }[direction]);

const ExpandTransition = transitionFactory(
  ['transform'],
  getInitialStyle,
  getTransitionStyles
);

ExpandTransition.displayName = 'ExpandTransition';

export default ExpandTransition;

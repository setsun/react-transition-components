import createTransition from '../../createTransition';

const transitionStyles = ({ start, end }) => ({
  entering: { transform: `scale(${start})` },
  entered: { transform: `scale(${end})` },
  exiting: { transform: `scale(${start})` },
  exited: { transform: `scale(${start})` },
});

const defaultStyle = {};

const transitionProperty = 'transform';

const ScaleTransition = createTransition(
  transitionStyles,
  defaultStyle,
  transitionProperty,
);

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

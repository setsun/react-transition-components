import createTransition from '../../createTransition';

const transitionStyles = ({ start, end }) => ({
  entering: { opacity: start },
  entered: { opacity: end },
  exiting: { opacity: start },
  exited: { opacity: start },
});

const defaultStyle = {};

const transitionProperty = 'opacity';

const FadeTransition = createTransition(
  transitionStyles,
  defaultStyle,
  transitionProperty,
);

FadeTransition.defaultProps = {
  start: 0,
  end: 1,
};

FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;

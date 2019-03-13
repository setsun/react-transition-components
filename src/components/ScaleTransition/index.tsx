import createTransition from '../../createTransition';

const transitionStyles = ({ start, end }) => ({
  entering: { transform: `scale(${start})`, opacity: 0 },
  entered: { transform: `scale(${end})`, opacity: 1 },
  exiting: { transform: `scale(${start})`, opacity: 0 },
  exited: { transform: `scale(${start})`, opacity: 0 },
});

const ScaleTransition = createTransition(transitionStyles);

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

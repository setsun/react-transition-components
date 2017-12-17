import transitionFactory from './transitionFactory';

const getTransitionStyles = ({ startValue = 0, endValue = 1 }) => ({
  entering: { opacity: startValue },
  entered: { opacity: endValue },
  exiting: { opacity: startValue },
});

const FadeTransition = transitionFactory([
  {
    name: 'opacity',
    start: 0,
    end: 1,
    getEnterState: value => value,
    getExitState: value => value,
  },
]);

FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;

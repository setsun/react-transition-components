import transitionFactory from './transitionFactory';

const FadeTransition = transitionFactory([
  {
    transitionName: 'opacity',
    getEnterStyle: (start = 0) => start,
    getExitStyle: (end = 1) => end,
  },
]);

FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;

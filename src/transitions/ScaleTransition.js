import transitionFactory from './transitionFactory';

const ScaleTransition = transitionFactory([
  {
    transitionName: 'transform',
    getEnterStyle: (start = 0) => `scale(${start})`,
    getExitStyle: (end = 1) => `scale(${end})`,
  },
]);

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

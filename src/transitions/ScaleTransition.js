import transitionFactory from './transitionFactory';

const ScaleTransition = transitionFactory([
  {
    transitionName: 'transform',
    start: 0,
    end: 1,
    getEnterStyle: start => `scale(${start})`,
    getExitStyle: end => `scale(${end})`,
  },
]);

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

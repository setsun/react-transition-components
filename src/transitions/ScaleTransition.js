import transitionFactory from './transitionFactory';

const ScaleTransition = transitionFactory([
  {
    name: 'transform',
    start: 0,
    end: 1,
    getEnterState: start => `scale(${start})`,
    getExitState: end => `scale(${end})`,
  },
]);

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

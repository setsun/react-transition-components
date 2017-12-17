import transitionFactory from './transitionFactory';

const RotateTransition = transitionFactory([
  {
    transitionName: 'transform',
    getEnterStyle: (start = 0.75) => `rotate(${start}turn)`,
    getExitStyle: (end = 1) => `rotate(${end}turn)`,
  },
  {
    transitionName: 'opacity',
    getEnterStyle: (start = 0) => start,
    getExitStyle: (end = 1) => end,
  },
]);

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

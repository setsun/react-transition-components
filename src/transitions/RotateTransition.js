import transitionFactory from './transitionFactory';

const RotateTransition = transitionFactory([
  {
    transitionName: 'transform',
    start: 0.75,
    end: 1,
    getEnterStyle: start => `rotate(${start}turn)`,
    getExitStyle: end => `rotate(${end}turn)`,
  },
  {
    transitionName: 'opacity',
    start: 0,
    end: 1,
    getEnterStyle: start => start,
    getExitStyle: end => end,
  },
]);

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

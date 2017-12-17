import transitionFactory from './transitionFactory';

const RotateTransition = transitionFactory([
  {
    name: 'transform',
    start: 0.75,
    end: 1,
    getEnterState: start => `rotate(${start}turn)`,
    getExitState: end => `rotate(${end}turn)`,
  },
  {
    name: 'opacity',
    start: 0,
    end: 1,
    getEnterState: start => start,
    getExitState: end => end,
  },
]);

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

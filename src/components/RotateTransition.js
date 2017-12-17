import choreography from '../decorator/choreography';

const RotateTransition = choreography([
  {
    transition: 'transform',
    getStartStyle: (start = 0.75) => `rotate(${start}turn)`,
    getEndStyle: (end = 1) => `rotate(${end}turn)`,
  },
  {
    transition: 'opacity',
    getStartStyle: (start = 0) => start,
    getEndStyle: (end = 1) => end,
  },
]);

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

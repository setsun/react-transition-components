import choreography from '../decorator/choreography';

const ScaleTransition = choreography([
  {
    transition: 'transform',
    getStartStyle: (start = 0) => `scale(${start})`,
    getEndStyle: (end = 1) => `scale(${end})`,
  },
]);

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

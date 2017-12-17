import choreography from '../decorator/choreography';

const FadeTransition = choreography([
  {
    transition: 'opacity',
    getStartStyle: (start = 0) => start,
    getEndStyle: (end = 1) => end,
  },
]);

FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;

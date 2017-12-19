// @flow

import type { TransitionConfig } from '../types/index';

const skew: {
  diagonal: TransitionConfig,
  diagonalInverse: TransitionConfig,
  vertical: TransitionConfig,
  horizontal: TransitionConfig,
} = {
  diagonal: {
    transition: 'transform',
    getStartStyle: (start = 0) => `skew(${start}deg, ${start}deg)`,
    getEndStyle: (end = 45) => `skew(-${end}deg, -${end}deg)`,
  },
  diagonalInverse: {
    transition: 'transform',
    getStartStyle: (start = 0) => `skew(${start}deg, ${start}deg)`,
    getEndStyle: (end = 45) => `skew(${end}deg, ${end}deg)`,
  },
  vertical: {
    transition: 'transform',
    getStartStyle: (start = 0) => `skewY(${start}deg)`,
    getEndStyle: (end = 90) => `skewY(${end}deg)`,
  },
  horizontal: {
    transition: 'transform',
    getStartStyle: (start = 0) => `skewX(${start}deg)`,
    getEndStyle: (end = 90) => `skewX(${end}deg)`,
  },
};

export default skew;

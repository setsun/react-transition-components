// @flow

import type { TransitionConfig } from '../types/index';

const scale: {
  all: TransitionConfig,
  vertical: TransitionConfig,
  horizontal: TransitionConfig,
} = {
  all: {
    transition: 'transform',
    getStartStyle: (start = 0) => `scale(${start})`,
    getEndStyle: (end = 1) => `scale(${end})`,
  },
  vertical: {
    transition: 'transform',
    getStartStyle: (start = 0) => `scaleY(${start})`,
    getEndStyle: (end = 1) => `scaleY(${end})`,
  },
  horizontal: {
    transition: 'transform',
    getStartStyle: (start = 0) => `scaleX(${start})`,
    getEndStyle: (end = 1) => `scaleX(${end})`,
  },
};

export default scale;

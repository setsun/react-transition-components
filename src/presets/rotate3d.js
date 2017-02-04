// @flow

import type { TransitionConfig } from '../types/index';

const rotate3d: {
  top: TransitionConfig,
  bottom: TransitionConfig,
  left: TransitionConfig,
  right: TransitionConfig,
} = {
  top: {
    transition: 'transform',
    getStartStyle: (start = 0.25) => `rotate3d(1, 0, 0, ${start}turn)`,
    getEndStyle: (end = 0) => `rotate3d(1, 0, 0, ${end}turn)`,
  },
  bottom: {
    transition: 'transform',
    getStartStyle: (start = 0.25) => `rotate3d(1, 0, 0, -${start}turn)`,
    getEndStyle: (end = 0) => `rotate3d(1, 0, 0, ${end}turn)`,
  },
  left: {
    transition: 'transform',
    getStartStyle: (start = 0.25) => `rotate3d(0, 1, 0, ${start}turn)`,
    getEndStyle: (end = 0) => `rotate3d(0, 1, 0, ${end}turn)`,
  },
  right: {
    transition: 'transform',
    getStartStyle: (start = 0.25) => `rotate3d(0, 1, 0, -${start}turn)`,
    getEndStyle: (end = 0) => `rotate3d(0, 1, 0, ${end}turn)`,
  },
};

export default rotate3d;

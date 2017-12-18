// @flow

import type { TransitionConfig } from '../types/index';

const rotate: TransitionConfig = {
  transition: 'transform',
  getStartStyle: (start = 0) => `rotate(${start}turn)`,
  getEndStyle: (end = 1) => `rotate(${end}turn)`,
};

export default rotate;

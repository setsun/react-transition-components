// @flow

import type { TransitionConfig } from '../types/index';

const opacity: TransitionConfig = {
  transition: 'opacity',
  getStartStyle: (start = 0) => start,
  getEndStyle: (end = 1) => end,
};

export default opacity;

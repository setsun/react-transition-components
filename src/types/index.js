// @flow

import type { Node } from 'react';

export type TransitionStates = {
  entering: Object,
  entered: Object,
  exiting: Object,
};

export type TransitionConfig = {
  transition: string,
  getStartStyle: Function,
  getEndStyle: Function,
};

export type TransitionProps = {
  children: Node,
  start?: string | number | Array<string | number>,
  end?: string | number | Array<string | number>,
  timeout: number | Array<number>,
  easing: string | Array<string>,
};

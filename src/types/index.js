// @flow

import type { Node } from 'react';

export type ArrayOrValue = Array<string | number> | string | number;
export type ArrayOrNumber = Array<number> | number;
export type ArrayOrString = Array<string> | string;

export type TransitionStates = {
  entering: Object,
  entered: Object,
  exiting: Object,
};

export type TransitionConfig = {
  transition: string,
  getStartStyle: any => string,
  getEndStyle: any => string,
};

export type TransitionProps = {
  children: Function | Node,
  staticStyles?: Object,
  start?: ArrayOrValue,
  end?: ArrayOrValue,
  timeout: ArrayOrNumber,
  easing: ArrayOrString,
};

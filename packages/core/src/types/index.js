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
  timeout: Array<number | { enter?: number, exit?: number }> | number,
  delay: Array<number | { enter?: number, exit?: number }> | number,
  easing: ArrayOrString,
  appear: boolean,
  start?: ArrayOrValue,
  end?: ArrayOrValue,
  style?: Object,
  onEnter: (node: HTMLElement, appearing: boolean) => void,
  onEntering: (node: HTMLElement, appearing: boolean) => void,
  onEntered: (node: HTMLElement, appearing: boolean) => void,
  onExit: (node: HTMLElement) => void,
  onExiting: (node: HTMLElement) => void,
  onExited: (node: HTMLElement) => void,
};

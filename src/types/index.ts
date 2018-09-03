export type ArrayOrValue = Array<string | number> | string | number;
export type ArrayOrNumber = Array<number> | number;
export interface TransitionStates {
  entering: Object;
  entered: Object;
  exiting: Object;
};

export interface TransitionConfig {
  transition: string;
  getStartStyle: (value: any) => string;
  getEndStyle: (value: any) => string;
};

export interface TransitionProps {
  children: Function | Node,
  timeout: ArrayOrNumber,
  delay: ArrayOrNumber,
  easing: ArrayOrValue,
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

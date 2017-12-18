// @flow

export type TransitionStates = {
  entering: Object,
  entered: Object,
  exiting: Object,
};

export type TransitionConfig = {
  transition: string,
  getStartStyle: Function,
  getEndStyle: Function,
  easing?: string,
};

export type TransitionProps = {
  children: Node,
  timeout: number,
  easing: string | Array<string>,
  start?: string | number | Array<string | number>,
  end?: string | number | Array<string | number>,
};

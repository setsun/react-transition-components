import { TransitionStatus } from 'react-transition-group/Transition';
import { TimingObject, Timing, TransitionComponentProps } from '../../types';

/**
 * This is for to force a repaint, which is necessary in order to transition styles when changing inline styles.
 * CSSTransition from react-transition-group also follows this implementation:
 * https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215
 */
export const withForceReflow = (callback: Function, props: TransitionComponentProps) => (node: HTMLElement, ...rest) => {
  node && node.scrollTop;
  callback && callback(node, ...rest, props);
};

export const toTimingObject = (timing: Timing): TimingObject =>
  typeof timing === 'number' ? { enter: timing, exit: timing } : timing;

const getTimingValue = (timingObject: TimingObject, status: TransitionStatus): number =>
  timingObject[status.indexOf('enter') > -1 ? 'enter' : 'exit'];

/**
 * Gets a CSS transition shorthand string
 * example: all 300ms ease-in-out 0ms
 */
export const getTransitionString = (
  transitionProperty: string,
  duration: TimingObject,
  delay: TimingObject,
  easing: string,
  status: TransitionStatus
) => {
  // have some reasonable fallbacks, so we reduce the chance of generating
  // an invalid CSS transition shorthand string
  const transitionPropertyValue = transitionProperty || 'all';
  const durationValue = getTimingValue(duration, status) || 0;
  const delayValue = getTimingValue(delay, status) || 0;
  const easingValue = easing || 'ease-in-out';

  return `${transitionPropertyValue} ${durationValue}ms ${easingValue} ${delayValue}ms`;
};

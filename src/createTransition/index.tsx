import * as React from 'react';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import {
  TransitionComponentProps,
  TransitionStyles,
  LazyTransitionStyles,
  LazyCSSProperties,
  AugmentedTransitionChildrenFunction,
  TimingObject,
  Timing,
} from '../types';

/**
 * This is for to force a repaint, which is necessary in order to transition styles when changing inline styles.
 * CSSTransition from react-transition-group also follows this implementation:
 * https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215
 */
const withForceReflow = (callback: Function) => (node: HTMLElement, ...rest) => {
  node.scrollTop;
  callback && callback(node, ...rest);
};

const toTimingObject = (timing: Timing): TimingObject =>
  typeof timing === 'number' ? { enter: timing, exit: timing } : timing;

const getTimingValue = (timingObject: TimingObject, status: TransitionStatus): number =>
  timingObject[status.indexOf('enter') > -1 ? 'enter' : 'exit'];

/**
 * Gets a CSS transition shorthand string
 * example: all 300ms ease-in-out
 */
const getTransitionString = (
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

const createTransition = (
  transitionStyles: LazyTransitionStyles | TransitionStyles,
  defaultStyle?: LazyCSSProperties | React.CSSProperties,
  transitionProperty?: string,
): React.SFC<TransitionComponentProps> => {
  const TransitionComponent = (props: TransitionComponentProps) => {
    const {
      duration,
      delay,
      easing,
      children,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      ...rest
    } = props;

    // generate the default style lazily, or use the static style object
    const computedDefaultStyle = typeof defaultStyle === 'function' ?
      defaultStyle(props) : defaultStyle;

    // generate the transition styles lazily, or use the static styles object
    const computedTransitionStyles = typeof transitionStyles === 'function' ?
      transitionStyles(props) : transitionStyles;

    // convert to timing objects for consistency
    const durationObject = toTimingObject(duration);
    const delayObject = toTimingObject(delay);

    return (
      <Transition
        in
        appear
        mountOnEnter
        unmountOnExit
        timeout={{
          enter: durationObject.enter + delayObject.enter,
          exit: durationObject.exit + delayObject.exit,
        }}
        onEnter={withForceReflow(onEnter)}
        onEntered={withForceReflow(onEntered)}
        onEntering={withForceReflow(onEntering)}
        onExit={withForceReflow(onExit)}
        onExiting={withForceReflow(onExiting)}
        onExited={withForceReflow(onExited)}
        {...rest}
      >
        {(status: TransitionStatus) => {
          // example: all 300ms ease-in-out
          const transition = getTransitionString(transitionProperty, durationObject, delayObject, easing, status);

          const style = {
            transition,
            ...computedDefaultStyle,
            ...computedTransitionStyles[status],
          };

          // support function as child render
          if (typeof children === 'function') {
            const childrenFn = children as AugmentedTransitionChildrenFunction;
            return childrenFn(status, style);
          }

          const child = React.Children.only(children) as React.ReactElement;
          const childStyle = child.props.style || {};

          // clone the child, with extended inline styles
          return React.cloneElement(child, {
            style: {
              ...style,
              ...childStyle,
            }
          });
        }}
      </Transition>
    )
  }

  // default timing / easing values to allow immediate usage
  // without needing to pass down any additional props
  TransitionComponent.defaultProps = {
    duration: 300,
    delay: 0,
    easing: 'ease-in-out'
  };

  return TransitionComponent;
};

export default createTransition;

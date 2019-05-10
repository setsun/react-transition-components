import * as React from 'react';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import {
  getTransitionString,
  toTimingObject,
  withForceReflow,
} from './utils';
import {
  TransitionComponentChildren,
  TransitionComponentProps,
  LazyCSSProperties,
} from '../types';

type TransitionConfig = {
  from: LazyCSSProperties | React.CSSProperties,
  enter: LazyCSSProperties | React.CSSProperties,
  exit?: LazyCSSProperties | React.CSSProperties,
  transitionProperty?: string,
};

const createTransition = ({
  from,
  enter,
  exit,
  transitionProperty,
}: TransitionConfig): React.SFC<TransitionComponentProps> => {
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

    // convert to timing objects for consistency
    const durationObject = toTimingObject(duration);
    const delayObject = toTimingObject(delay);

    // generate the styles lazily, or use the static style object
    const fromStyle = typeof from === 'function' ? from(props) : (from || {});
    const enterStyle = typeof enter === 'function' ? enter(props) : (enter || {});

    // default to from style, if exit ends up being undefined
    const exitStyle = typeof exit === 'function' ? exit(props) : (exit || from);

    const transitionStyles = {
      entering: enterStyle,
      entered: enterStyle,
      exiting: exitStyle,
      exited: exitStyle,
    };

    return (
      <Transition
        in
        appear
        mountOnEnter
        unmountOnExit
        {...rest}
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
      >
        {(status: TransitionStatus) => {
          // example: all 300ms ease-in-out
          const transition = getTransitionString(transitionProperty, durationObject, delayObject, easing, status);

          const style = {
            transition,
            ...fromStyle,
            ...transitionStyles[status],
          };

          // support function as child render
          if (typeof children === 'function') {
            const childrenFn = children;
            return childrenFn(style, status);
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

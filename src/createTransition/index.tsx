import * as React from 'react';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import {
  getTransitionString,
  toTimingObject,
  withForceReflow,
} from './utils';
import {
  TransitionConfig,
  TransitionComponentProps,
} from '../types';

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
      onExit,
      ...rest
    } = props;

    // calculate durations / delays, for enter / exit
    const durationObject = toTimingObject(duration);
    const delayObject = toTimingObject(delay);
    const enterTimeout = durationObject.enter + delayObject.enter;
    const exitTimeout = durationObject.exit + delayObject.exit;

    // generate the styles lazily, or use the static style object
    const fromStyle = typeof from === 'function' ? from(props) : (from || {});
    const enterStyle = typeof enter === 'function' ? enter(props) : (enter || {});

    // default the exit style to the from style, if exit ends up being undefined
    const exitStyle = typeof exit === 'function' ? exit(props) : (exit || fromStyle);

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
        timeout={{ enter: enterTimeout, exit: exitTimeout }}
        onEnter={withForceReflow(onEnter)}
        onExit={withForceReflow(onExit)}
      >
        {(status: TransitionStatus) => {
          const style = {
            transition: getTransitionString(transitionProperty, durationObject, delayObject, easing, status),
            ...fromStyle,
            ...transitionStyles[status],
          };

          // support function as child render
          if (typeof children === 'function') {
            return children(style, status);
          }

          const child = React.Children.only(children) as React.ReactElement;

          // clone the child, with extended inline styles
          return React.cloneElement(child, {
            style: {
              ...style,
              ...(child.props.style || {}),
            }
          });
        }}
      </Transition>
    )
  }

  // default timing / easing values to allow immediate usage
  TransitionComponent.defaultProps = {
    duration: 300,
    delay: 0,
    easing: 'ease-in-out'
  };

  return TransitionComponent;
};

export default createTransition;

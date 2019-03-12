import * as React from 'react';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import { TransitionStyles, TransitionComponentProps } from '../types';

const createTransition = (
  defaultStyle: Object,
  transitionStyles: TransitionStyles,
  transitionProperty = 'all'
) => {
  const TransitionComponent = ({
    timeout,
    easing = 'ease-in-out',
    children,
    ...rest
  }: TransitionComponentProps): React.ReactNode => {
    const transition = `${transitionProperty} ${timeout}ms ${easing}`;

    return (
      <Transition
        timeout={timeout}
        {...rest}
      >
        {(status: TransitionStatus) => {
          const style = {
            ...defaultStyle,
            ...transitionStyles[status],
            transition,
          };

          // support function as child render
          if (typeof children === 'function') {
            return children(status, style);
          }

          const child = React.Children.only(children);
          const childStyle = child.props.style || {};

          return React.cloneElement(child, {
            style: {
              ...style,
              ...childStyle,
            }
          })
        }}
      </Transition>
    )
  }

  TransitionComponent.defaultProps = {
    easing: 'ease-in-out',
  };

  return TransitionComponent;
};

export default createTransition;

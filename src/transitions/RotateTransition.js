import React from 'react';
import Transition from 'react-transition-group/Transition';
import getStyle from '../utils/getStyle';

const transitionStyles = {
  entering: { opacity: 0, transform: 'rotate(180deg)' },
  entered: { opacity: 1, transform: 'rotate(360deg)' },
  exiting: { opacity: 0, transform: 'rotate(180deg)' },
};

const RotateTransition = ({
  children,
  className,
  duration = 300,
  easing = 'ease-in',
  ...rest
}) => {
  const defaultStyle = {
    transition: `transform ${duration}ms ${easing}, opacity ${duration}ms ${easing}`,
    transform: 'rotate(180deg)',
    opacity: 0,
  };

  return (
    <Transition mountOnEnter unmountOnExit {...rest} timeout={duration}>
      {state => (
        <span style={getStyle(defaultStyle, transitionStyles, state)}>
          {children}
        </span>
      )}
    </Transition>
  );
};

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

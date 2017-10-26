import React from 'react';
import Transition from 'react-transition-group/Transition';
import getStyle from '../utils/getStyle';

const transitionStyles = {
  entering: { opacity: 0, transform: 'scale(0)' },
  entered: { opacity: 1, transform: 'scale(1)' },
  exiting: { opacity: 0, transform: 'scale(0)' },
};

const ScaleTransition = ({
  children,
  className,
  duration = 300,
  easing = 'ease-in',
  ...rest
}) => {
  const defaultStyle = {
    transition: `transform ${duration}ms ${easing}, opacity ${duration}ms ${easing}`,
    transform: 'scale(0)',
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

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

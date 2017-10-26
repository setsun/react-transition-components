import React from 'react';
import Transition from 'react-transition-group/Transition';
import getStyle from '../utils/getStyle';

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
};

const FadeTransition = ({
  children,
  className,
  duration = 300,
  easing = 'ease-in',
  ...rest
}) => {
  const defaultStyle = {
    transition: `opacity ${duration}ms ${easing}`,
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

FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;

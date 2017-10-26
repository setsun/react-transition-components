import React from 'react';
import { Transition } from 'react-transition-group';

const getStyle = (defaultStyle, transitionStyles, state) => {
  return {
    display: 'inline-block',
    ...defaultStyle,
    ...transitionStyles[state],
  };
};

const transitionFactory = (getTransition, initialStyle, transitionStyles) => ({
  children,
  className,
  duration = 300,
  easing = 'ease-in',
  ...rest
}) => {
  const defaultStyle = {
    transition: getTransition(duration, easing),
    ...initialStyle,
  };

  return (
    <Transition appear mountOnEnter unmountOnExit {...rest} timeout={duration}>
      {state => (
        <span style={getStyle(defaultStyle, transitionStyles, state)}>
          {children}
        </span>
      )}
    </Transition>
  );
};

export default transitionFactory;

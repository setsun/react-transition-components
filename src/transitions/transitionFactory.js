import React from 'react';
import { Transition } from 'react-transition-group';

function getFinalStyle(defaultStyle, transitionStyles, state) {
  return {
    display: 'inline-block',
    ...defaultStyle,
    ...transitionStyles[state],
  };
}

const transitionFactory = (
  getTransition,
  getInitialStyle,
  getTransitionStyles
) => props => {
  const {
    children,
    className,
    duration = 300,
    easing = 'ease-in',
    ...rest
  } = props;

  const defaultStyle = {
    transition: getTransition(duration, easing),
    ...getInitialStyle(props),
  };

  return (
    <Transition appear mountOnEnter unmountOnExit {...rest} timeout={duration}>
      {state => (
        <span
          style={getFinalStyle(defaultStyle, getTransitionStyles(props), state)}
        >
          {children}
        </span>
      )}
    </Transition>
  );
};

export default transitionFactory;

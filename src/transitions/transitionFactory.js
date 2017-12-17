// @flow

import React from 'react';
import type { Node } from 'react';
import { Transition } from 'react-transition-group';

function getTransitionProperty(
  timeout: number,
  easing: string,
  transitions: Array<Object>
): string {
  return transitions
    .map(transition => `${transition.name} ${timeout}ms ${easing}`)
    .join(',');
}

function getInitialStyle(transitions, timeout, easing) {
  return {
    transition: getTransitionProperty(timeout, easing, transitions),
    ...transitions.reduce((style, transition) => {
      style[transition.name] = transition.getEnterState(transition.start);
      return style;
    }, {}),
  };
}

function getAllTransitionStyles(transitions) {
  return transitions.reduce(
    (styles, transition) => {
      styles.entering[transition.name] = transition.getEnterState(
        transition.start
      );
      styles.entered[transition.name] = transition.getExitState(transition.end);
      styles.exiting[transition.name] = transition.getEnterState(
        transition.start
      );
      return styles;
    },
    {
      entering: {},
      entered: {},
      exiting: {},
    }
  );
}

function getFinalStyle(defaultStyle, transitionStyles, state) {
  return {
    display: 'inline-block',
    ...defaultStyle,
    ...transitionStyles[state],
  };
}

type TransitionProps = {
  children: Node,
  timeout: number,
  easing: string,
};

const transitionFactory = (transitions: Array<Object>) => {
  return class extends React.Component<TransitionProps> {
    static defaultProps = {
      timeout: 300,
      easing: 'ease-in',
    };

    render() {
      const { children, timeout, easing, ...rest } = this.props;

      return (
        <Transition
          appear
          mountOnEnter
          unmountOnExit
          timeout={timeout}
          {...rest}
        >
          {state => (
            <span
              style={getFinalStyle(
                getInitialStyle(transitions, timeout, easing),
                getAllTransitionStyles(transitions),
                state
              )}
            >
              {children}
            </span>
          )}
        </Transition>
      );
    }
  };
};

export default transitionFactory;

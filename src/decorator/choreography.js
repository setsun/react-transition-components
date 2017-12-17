// @flow

import React from 'react';
import type { Node } from 'react';
import { Transition } from 'react-transition-group';

const globalStyle = {
  display: 'inline-block',
  perspective: '1000px',
};

type TransitionProps = {
  children: Node,
  timeout: number,
  easing: string,
  start: string | number,
  end: string | number,
};

const choreography = (transitions: Array<Object>, styles: Object) => {
  return class extends React.Component<TransitionProps> {
    static defaultProps = {
      timeout: 300,
      easing: 'ease-in',
    };

    getTransitionProperty = (): string => {
      const { timeout, easing } = this.props;

      return transitions
        .map(transition => `${transition.transition} ${timeout}ms ${easing}`)
        .join(',');
    };

    getDefaultStyle = () => {
      const { timeout, easing, start } = this.props;

      return {
        transition: this.getTransitionProperty(),
        ...globalStyle,
        ...styles,
        ...transitions.reduce((style, transition) => {
          style[transition.transition] = transition.getStartStyle(start);
          return style;
        }, {}),
      };
    };

    getTransitionStates = () => {
      const { start, end } = this.props;

      return transitions.reduce(
        (styles, transition) => {
          styles.entering[transition.transition] = transition.getStartStyle(
            start
          );
          styles.entered[transition.transition] = transition.getEndStyle(end);
          styles.exiting[transition.transition] = transition.getStartStyle(
            start
          );
          return styles;
        },
        {
          entering: {},
          entered: {},
          exiting: {},
        }
      );
    };

    getFinalStyle = (state: string) => {
      return {
        ...this.getDefaultStyle(),
        ...this.getTransitionStates()[state],
      };
    };

    render() {
      const { children, timeout, ...rest } = this.props;

      return (
        <Transition
          appear
          mountOnEnter
          unmountOnExit
          timeout={timeout}
          {...rest}
        >
          {state => <span style={this.getFinalStyle(state)}>{children}</span>}
        </Transition>
      );
    }
  };
};

export default choreography;

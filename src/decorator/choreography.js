// @flow

import React from 'react';
import type { Node } from 'react';
import { Transition } from 'react-transition-group';

const globalStyles = {
  display: 'inline-block',
};

type TransitionStates = {
  entering: Object,
  entered: Object,
  exiting: Object,
};

type TransitionConfig = {
  transition: string,
  getStartStyle: Function,
  getEndStyle: Function,
  easing?: string,
};

type TransitionProps = {
  children: Node,
  timeout: number,
  easing: string | Array<string>,
  start?: string | number | Array<string | number>,
  end?: string | number | Array<string | number>,
};

const getStyleString = (
  transition: string,
  currentStyle: string,
  style: string
) =>
  transition === 'transform' && !!currentStyle
    ? `${currentStyle} ${style}`
    : style;

const choreography = (
  transitionConfigs: Array<TransitionConfig>,
  styles: Object
) => {
  return class extends React.Component<TransitionProps> {
    static defaultProps = {
      timeout: 300,
      easing: 'ease-in',
    };

    getTransitionProperty = (): string => {
      const { timeout, easing } = this.props;

      return transitionConfigs
        .map((config, index) => {
          const easingVal = Array.isArray(easing) ? easing[index] : easing;
          return `${config.transition} ${timeout}ms ${config.easing ||
            easingVal}`;
        })
        .join(',');
    };

    getDefaultStyle = (): Object => {
      const { start } = this.props;

      return {
        transition: this.getTransitionProperty(),
        ...globalStyles,
        ...styles,
        ...transitionConfigs.reduce((style, config, index) => {
          const startVal = Array.isArray(start) ? start[index] : start;

          style[config.transition] = getStyleString(
            config.transition,
            style[config.transition],
            config.getStartStyle(startVal)
          );
          return style;
        }, {}),
      };
    };

    getTransitionStates = (): TransitionStates => {
      const { start, end } = this.props;

      return transitionConfigs.reduce(
        (styles, config, index) => {
          const startVal = Array.isArray(start) ? start[index] : start;
          const endVal = Array.isArray(end) ? end[index] : end;

          styles.entering[config.transition] = getStyleString(
            config.transition,
            styles.entering[config.transition],
            config.getStartStyle(startVal)
          );
          styles.entered[config.transition] = getStyleString(
            config.transition,
            styles.entered[config.transition],
            config.getEndStyle(endVal)
          );
          styles.exiting[config.transition] = getStyleString(
            config.transition,
            styles.exiting[config.transition],
            config.getStartStyle(startVal)
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

    getFinalStyle = (state: string): Object => {
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

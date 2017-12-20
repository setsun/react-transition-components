// @flow

import React from 'react';
import type {
  TransitionProps,
  TransitionConfig,
  TransitionStates,
} from '../types/index';
import { Transition } from 'react-transition-group';

const getIsomorphicValue = (value, index): any =>
  Array.isArray(value) ? value[index] : value;

const getStyleString = (
  transition: string,
  currentStyle: string,
  style: string
): string =>
  transition === 'transform' && !!currentStyle
    ? `${currentStyle} ${style}`
    : style;

const choreography = (
  transitionConfigs: Array<TransitionConfig>,
  staticStyles?: Object,
  defaultProps?: TransitionProps
) => {
  return class extends React.Component<TransitionProps> {
    static defaultProps = {
      timeout: 300,
      easing: 'ease-in-out',
      ...defaultProps,
    };

    getGlobalTimeout = (): number => {
      const { timeout } = this.props;
      return Array.isArray(timeout) ? Math.max(...timeout) : timeout;
    };

    getTransitionProperty = (): string => {
      const { timeout, easing } = this.props;

      return transitionConfigs
        .map((config, index) => {
          const timeoutVal = getIsomorphicValue(timeout, index);
          const easingVal = getIsomorphicValue(easing, index);
          return `${config.transition} ${timeoutVal}ms ${easingVal}`;
        })
        .join(',');
    };

    getDefaultStyle = (): Object => {
      const { start } = this.props;

      return {
        display: 'inline-block',
        transition: this.getTransitionProperty(),
        ...staticStyles,
        ...transitionConfigs.reduce((style, config, index) => {
          const startVal = getIsomorphicValue(start, index);

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
          timeout={this.getGlobalTimeout()}
          {...rest}
        >
          {state => <div style={this.getFinalStyle(state)}>{children}</div>}
        </Transition>
      );
    }
  };
};

export default choreography;

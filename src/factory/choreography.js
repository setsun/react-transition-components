// @flow

import React from 'react';
import { Transition } from 'react-transition-group';
import type {
  TransitionProps,
  TransitionConfig,
  TransitionStates,
} from '../types/index';

const getIsomorphicValue = (value, index): any =>
  Array.isArray(value) ? value[index] : value;

const naiveMemoize = (callback): Function => {
  const cache = {};

  return (...args: Array<any>): any => {
    const key = args.join('-');
    if (!cache.hasOwnProperty(key)) cache[key] = callback.apply(null, args);
    return cache[key];
  };
};

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

    getGlobalTimeout = naiveMemoize((timeout): number => {
      return Array.isArray(timeout) ? Math.max(...timeout) : timeout;
    });

    getTransitionProperty = (timeout, easing): string => {
      return transitionConfigs
        .map((config, index) => {
          const timeoutVal = getIsomorphicValue(timeout, index);
          const easingVal = getIsomorphicValue(easing, index);
          return `${config.transition} ${timeoutVal}ms ${easingVal}`;
        })
        .join(',');
    };

    getDefaultStyle = (timeout, easing, start): Object => {
      return {
        display: 'inline-block',
        transition: this.getTransitionProperty(timeout, easing),
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

    getTransitionStates = (timeout, easing, start, end): TransitionStates => {
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

    getFinalStyle = naiveMemoize(
      (state: string, timeout, easing, start, end) => {
        return {
          ...this.getDefaultStyle(timeout, easing, start),
          ...this.getTransitionStates(timeout, easing, start, end)[state],
        };
      }
    );

    render() {
      const { children, timeout, easing, start, end, ...rest } = this.props;

      return (
        <Transition
          appear
          mountOnEnter
          unmountOnExit
          timeout={this.getGlobalTimeout(timeout)}
          {...rest}
        >
          {state => (
            <div style={this.getFinalStyle(state, timeout, easing, start, end)}>
              {children}
            </div>
          )}
        </Transition>
      );
    }
  };
};

export default choreography;

// @flow

import React from 'react';
import { Transition } from 'react-transition-group';
import type {
  TransitionProps,
  TransitionConfig,
  TransitionStates,
} from '../types/index';

const getPrimitiveValue = (value, index): any =>
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

const transitionFactory = (
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

    constructor(props: TransitionProps) {
      super(props);
      const { timeout, easing, start, end } = props;

      // warm up cache
      this.getFinalStyle('entering', timeout, easing, start, end);
      this.getFinalStyle('entered', timeout, easing, start, end);
      this.getFinalStyle('exiting', timeout, easing, start, end);
      this.getFinalStyle('exited', timeout, easing, start, end);
    }

    getGlobalTimeout = naiveMemoize((timeout): number => {
      return Array.isArray(timeout) ? Math.max(...timeout) : timeout;
    });

    getTransitionProperty = (timeout, easing): string => {
      return transitionConfigs
        .map((config, index) => {
          const timeoutVal = getPrimitiveValue(timeout, index);
          const easingVal = getPrimitiveValue(easing, index);
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
          const startVal = getPrimitiveValue(start, index);

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
          styles.exited[config.transition] = styles.entering[config.transition];
          return styles;
        },
        {
          entering: {},
          entered: {},
          exiting: {},
          exited: {},
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
          {(state, childProps) => {
            const style = this.getFinalStyle(
              state,
              timeout,
              easing,
              start,
              end
            );

            if (typeof children === 'function') {
              childProps.style = style;
              return children(state, childProps);
            }

            const child = React.Children.only(children);
            return React.cloneElement(child, {
              style,
            });
          }}
        </Transition>
      );
    }
  };
};

export default transitionFactory;

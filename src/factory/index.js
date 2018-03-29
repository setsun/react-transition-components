// @flow

import React from 'react';
import { Transition } from 'react-transition-group';
import camelCase from 'lodash.camelcase';
import type {
  TransitionProps,
  TransitionConfig,
  TransitionStates,
  ArrayOrValue,
  ArrayOrNumber,
  ArrayOrString,
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

    getGlobalTimeout = naiveMemoize((timeout: number): number => {
      return Array.isArray(timeout) ? Math.max(...timeout) : timeout;
    });

    getTransitionProperty = (timeout: number, easing: string): string => {
      return transitionConfigs
        .map((config, index) => {
          const timeoutVal = getPrimitiveValue(timeout, index);
          const easingVal = getPrimitiveValue(easing, index);
          return `${config.transition} ${timeoutVal}ms ${easingVal}`;
        })
        .join(',');
    };

    getDefaultStyle = (
      timeout: number,
      easing: string,
      start: ArrayOrValue
    ): Object => {
      return {
        transition: this.getTransitionProperty(timeout, easing),
        ...(this.props.staticStyles || staticStyles),
        ...transitionConfigs.reduce((style, config, index) => {
          const startVal = getPrimitiveValue(start, index);
          const transitionName = camelCase(config.transition);

          style[transitionName] = getStyleString(
            transitionName,
            style[transitionName],
            config.getStartStyle(startVal)
          );
          return style;
        }, {}),
      };
    };

    getTransitionStates = (
      timeout: number,
      easing: string,
      start: ArrayOrValue,
      end: ArrayOrValue
    ): TransitionStates => {
      return transitionConfigs.reduce(
        (styles, config, index) => {
          const startVal = getPrimitiveValue(start, index);
          const endVal = getPrimitiveValue(end, index);
          const transitionName = camelCase(config.transition);

          styles.entering[transitionName] = getStyleString(
            transitionName,
            styles.entering[transitionName],
            config.getStartStyle(startVal)
          );
          styles.entered[transitionName] = getStyleString(
            transitionName,
            styles.entered[transitionName],
            config.getEndStyle(endVal)
          );
          styles.exiting[transitionName] = getStyleString(
            transitionName,
            styles.exiting[transitionName],
            config.getStartStyle(startVal)
          );
          styles.exited[transitionName] = styles.entering[transitionName];
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
      (
        state: string,
        timeout: number,
        easing: string,
        start: ArrayOrValue,
        end: ArrayOrValue
      ): Object => {
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
          in
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
            const childStyle = child.props.style;

            return React.cloneElement(child, {
              style: {
                ...childStyle,
                ...style,
              },
            });
          }}
        </Transition>
      );
    }
  };
};

export default transitionFactory;

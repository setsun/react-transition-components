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

const transitionFactory = (...args: Array<any>) => {
  const transitions: Array<TransitionConfig> = [...args];

  return class extends React.Component<TransitionProps> {
    static transitions = transitions;

    static defaultProps = {
      timeout: 300,
      delay: 0,
      easing: 'ease-in-out',
    };

    constructor(props: TransitionProps) {
      super(props);
    }

    getGlobalTimeout = naiveMemoize(
      (timeout: number, delay: number): number =>
        (Array.isArray(timeout) ? Math.max(...timeout) : timeout) +
        (Array.isArray(delay) ? Math.max(...delay) : delay)
    );

    getTransitionProperty = (
      timeout: number,
      delay: number,
      easing: string
    ): string => {
      return transitions
        .map((transition, index) => {
          const timeoutVal = getPrimitiveValue(timeout, index);
          const delayVal = getPrimitiveValue(delay, index);
          const easingVal = getPrimitiveValue(easing, index);
          return `${
            transition.transition
          } ${timeoutVal}ms ${easingVal} ${delayVal}ms`;
        })
        .join(',');
    };

    getDefaultStyle = (
      timeout: number,
      delay: number,
      easing: string,
      start: ArrayOrValue
    ): Object => {
      return {
        transition: this.getTransitionProperty(timeout, delay, easing),
        ...transitions.reduce((style, transition, index) => {
          const startVal = getPrimitiveValue(start, index);
          const transitionName = camelCase(transition.transition);

          style[transitionName] = getStyleString(
            transitionName,
            style[transitionName],
            transition.getStartStyle(startVal)
          );
          return style;
        }, {}),
      };
    };

    getTransitionStates = (
      start: ArrayOrValue,
      end: ArrayOrValue
    ): TransitionStates => {
      return transitions.reduce(
        (styles, transition, index) => {
          const startVal = getPrimitiveValue(start, index);
          const endVal = getPrimitiveValue(end, index);
          const transitionName = camelCase(transition.transition);

          styles.entering[transitionName] = getStyleString(
            transitionName,
            styles.entering[transitionName],
            transition.getStartStyle(endVal)
          );
          styles.entered[transitionName] = getStyleString(
            transitionName,
            styles.entered[transitionName],
            transition.getEndStyle(endVal)
          );
          styles.exiting[transitionName] = getStyleString(
            transitionName,
            styles.exiting[transitionName],
            transition.getStartStyle(startVal)
          );
          styles.exited[transitionName] = getStyleString(
            transitionName,
            styles.exited[transitionName],
            transition.getStartStyle(startVal)
          );

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
        delay: number,
        easing: string,
        start: ArrayOrValue,
        end: ArrayOrValue,
        staticStyle: Object
      ): Object => {
        return {
          ...this.getDefaultStyle(timeout, delay, easing, start),
          ...this.getTransitionStates(start, end)[state],
          ...(staticStyle || {}),
        };
      }
    );

    render() {
      const {
        children,
        timeout,
        delay,
        easing,
        start,
        end,
        style: staticStyle,
        ...rest
      } = this.props;

      return (
        <Transition
          in
          appear
          mountOnEnter
          unmountOnExit
          timeout={this.getGlobalTimeout(timeout, delay)}
          {...rest}
        >
          {(state, childProps) => {
            const style = this.getFinalStyle(
              state,
              timeout,
              delay,
              easing,
              start,
              end,
              staticStyle
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

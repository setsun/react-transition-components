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

const triggerReflow = (node: HTMLElement) => { node && node.scrollTop };

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

const identity = value => value;

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
          const getStartStyle = transition.getStartStyle || identity;

          style[transitionName] = getStyleString(
            transitionName,
            style[transitionName],
            getStartStyle(startVal)
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
          const getStartStyle = transition.getStartStyle || identity;
          const getEndStyle = transition.getEndStyle || identity;

          styles.exited[transitionName] = getStyleString(
            transitionName,
            styles.exited[transitionName],
            getStartStyle(startVal)
          );
          styles.entering[transitionName] = getStyleString(
            transitionName,
            styles.entering[transitionName],
            getEndStyle(endVal)
          );
          styles.entered[transitionName] = getStyleString(
            transitionName,
            styles.entered[transitionName],
            getEndStyle(endVal)
          );
          styles.exiting[transitionName] = getStyleString(
            transitionName,
            styles.exiting[transitionName],
            getStartStyle(startVal)
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

    onEnter = (node: HTMLElement, appearing: boolean) => {
      triggerReflow(node);
      this.props.onEnter && this.props.onEnter(node, appearing);
    }

    onEntering = (node: HTMLElement, appearing: boolean) => {
      triggerReflow(node);
      this.props.onEntering && this.props.onEntering(node, appearing);
    }

    onEntered = (node: HTMLElement, appearing: boolean) => {
      triggerReflow(node);
      this.props.onEntered && this.props.onEntered(node, appearing);
    }

    onExit = (node: HTMLElement) => {
      triggerReflow(node);
      this.props.onExit && this.props.onExit(node);
    }

    onExiting = (node: HTMLElement) => {
      triggerReflow(node);
      this.props.onExiting && this.props.onExiting(node);
    }

    onExited = (node: HTMLElement) => {
      triggerReflow(node);
      this.props.onExited && this.props.onExited(node);
    }

    render() {
      const {
        children,
        timeout,
        delay,
        easing,
        start,
        end,
        style: staticStyle,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,
        ...rest
      } = this.props;

      return (
        <Transition
          in
          appear
          mountOnEnter
          unmountOnExit
          timeout={this.getGlobalTimeout(timeout, delay)}
          onEnter={this.onEnter}
          onEntering={this.onEntering}
          onEntered={this.onEntered}
          onExit={this.onExit}
          onExiting={this.onExiting}
          onExited={this.onExited}
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

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
  timeout?: number,
  easing?: string,
};

type TransitionProps = {
  children: Node,
  timeout: number,
  easing: string,
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
        .map(config => `${config.transition} ${timeout}ms ${easing}`)
        .join(',');
    };

    getDefaultStyle = (): Object => {
      const { start } = this.props;

      return {
        transition: this.getTransitionProperty(),
        ...globalStyles,
        ...styles,
        ...transitionConfigs.reduce((style, config) => {
          style[config.transition] = getStyleString(
            config.transition,
            style[config.transition],
            config.getStartStyle(start)
          );
          return style;
        }, {}),
      };
    };

    getTransitionStates = (): TransitionStates => {
      const { start, end } = this.props;

      return transitionConfigs.reduce(
        (styles, config) => {
          styles.entering[config.transition] = getStyleString(
            config.transition,
            styles.entering[config.transition],
            config.getStartStyle(start)
          );
          styles.entered[config.transition] = getStyleString(
            config.transition,
            styles.entered[config.transition],
            config.getEndStyle(end)
          );
          styles.exiting[config.transition] = getStyleString(
            config.transition,
            styles.exiting[config.transition],
            config.getStartStyle(start)
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

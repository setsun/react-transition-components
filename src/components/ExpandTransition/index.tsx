// @flow

import React from 'react';
import choreography from '../../core';
import { translate } from '../../presets';
import { TransitionProps } from '../../types';

import { directions } from '../constants';

type ExpandTransitionProps = TransitionProps & {
  direction: directions.left | directions.top,
};

const ExpandLeftTransition = choreography({
  transition: 'max-width',
  getStartStyle: (start = 0) => `${start}px`,
  getEndStyle: (end = 999) => `${end}px`,
});

const ExpandTopTransition = choreography({
  transition: 'max-height',
  getStartStyle: (start = 0) => `${start}px`,
  getEndStyle: (end = 999) => `${end}px`,
});

class ExpandTransition extends React.Component<ExpandTransitionProps> {
  static defaultProps = {
    direction: directions.left,
  };

  constructor(props) {
    super(props);
    this.component = this.getTransitionComponent(props.direction);
    this.container = React.createRef();
    this.dimensions = {};
    this.state = {
      measured: false,
    };
  }

  componentWillUpdate(nextProps) {
    if (this.props.direction !== nextProps.direction) {
      this.component = this.getTransitionComponent(nextProps.direction);
    }
  }

  componentDidMount() {
    const node = this.container.current;
    const clientRect = node.getBoundingClientRect();
    this.dimensions = {
      height: clientRect.height,
      width: clientRect.width,
    };
    this.setState({ measured: true});
  }

  getTransitionComponent = (direction) => {
    switch (direction) {
      case directions.left:
        return ExpandLeftTransition;
      case directions.top:
        return ExpandTopTransition;
    }
  }

  getEndValue = (direction) => {
    switch (direction) {
      case directions.left:
        return this.dimensions.width;
      case directions.top:
        return this.dimensions.height;
    }
  }

  render() {
    const { direction, children, ...rest } = this.props;
    const { measured } = this.state;
    const end = this.getEndValue(direction);
    const TransitionComponent = this.component;

    return measured ? (
        <TransitionComponent {...rest} end={end} style={{ overflow: 'hidden' }}>
          <div>
            {children}
          </div>
        </TransitionComponent>
    ) : (
      <div ref={this.container} style={{ position: 'absolute', opacity: '0', zIndex: '-1' }}>
        {children}
      </div>
    )
  }
}

export default ExpandTransition;

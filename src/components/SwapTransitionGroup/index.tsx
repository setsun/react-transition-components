import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

class SwapTransitionGroup extends React.Component {
  render() {
    return (
      <TransitionGroup>
        {this.props.children}
      </TransitionGroup>
    );
  }
}

export default SwapTransitionGroup;

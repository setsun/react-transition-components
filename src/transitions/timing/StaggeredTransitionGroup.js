import React from 'react';
import type { Node } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

type StaggeredTransitionGroupProps = {
  children: Node,
  delay: number,
};

class StaggeredTransitionGroup extends React.Component<
  StaggeredTransitionGroupProps
> {
  static defaultProps = {
    delay: 0,
  };

  constructor() {
    super();
    this.timeout = null;
    this.currentChildIndex = -1;
    this.state = { index: 0 };
  }

  componentWillMount() {
    this.timeout = setInterval(() => {
      const { index } = this.state;
      if (index === children.length) clearInterval(this.timeout);
      this.setState({ index: index + 1 });
    }, this.props.delay);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  childFactory = child => {
    const { children } = this.props;
    const { index } = this.state;
    const show = this.currentChildIndex <= index;
    this.currentChildIndex =
      children.length > this.currentChildIndex - 1
        ? this.currentChildIndex + 1
        : 0;

    return React.cloneElement(child, {
      in: show,
    });
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <TransitionGroup
        mountOnEnter
        unmountOnExit
        {...rest}
        childFactory={this.childFactory}
      >
        {children}
      </TransitionGroup>
    );
  }
}

export default StaggeredTransitionGroup;

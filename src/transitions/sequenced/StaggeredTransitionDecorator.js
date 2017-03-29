import React, {PropTypes} from 'react';

const StaggeredTransitionDecorator = (TransitionComponent) => {
  let staggerInterval = null;

  return React.createClass({
    propTypes: {
      children: PropTypes.node,
      staggerTime: PropTypes.number.isRequired,
    },

    getInitialState() {
      return { childIndex: 0 };
    },

    getDefaultProps() {
      return { staggerTime: 0 };
    },

    componentWillMount() {
      const {
        children,
        staggerTime
      } = this.props;

      this.staggerInterval = setInterval(() => {
        const { childIndex } = this.state;

        if (childIndex === children.length) {
          clearInterval(staggerInterval);
        }

        this.setState({ childIndex: childIndex + 1 });
      }, staggerTime);
    },

    componentWillUnmount() {
      clearInterval(this.staggerInterval);
    },

    render() {
      const {
        children,
        staggerTime,
      } = this.props;
      const { childIndex } = this.state;

      return (
        <TransitionComponent {...this.props}>
          {children.length ? children.slice(0, childIndex).map((child) => child) : children}
        </TransitionComponent>
      );
    }
  });
};

export default StaggeredTransitionDecorator;

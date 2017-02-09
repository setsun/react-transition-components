import React, {PropTypes} from 'react';

let staggerInterval = null;

const StaggeredEntranceGroup = React.createClass({
  propTypes: {
    children: PropTypes.node,
    staggerTime: PropTypes.number.isRequired,
    transitionComponent: PropTypes.object,
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

    staggerInterval = setInterval(() => {
      const { childIndex } = this.state;

      if (childIndex === children.length) {
        clearInterval(staggerInterval);
      }

      this.setState({ childIndex: childIndex + 1 });
    }, staggerTime);
  },

  render() {
    const { children } = this.props;
    const { childIndex } = this.state;

    return (
      <span>
        {children.slice(0, childIndex).map((child) => child)}
      </span>
    );
  }
});

export default StaggeredEntranceGroup;

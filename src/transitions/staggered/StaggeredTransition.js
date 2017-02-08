import React, {PropTypes, Children} from 'react';
import {StaggeredMotion, spring, presets} from 'react-motion';

class StaggeredTransition extends React.Component {
  constructor(props) {
    super(props);
    this.getDefaultStyles = this.getDefaultStyles.bind(this);
    this.getStyles = this.getStyles.bind(this);
  }

  getDefaultStyles() {
    return Children.map(this.props.children, () => {
      return {opacity: 0, top: 20};
    });
  }

  getStyles(prevStyles) {
    return prevStyles.map((_, i) => {
      return i === 0
        ? {opacity: spring(1, presets.gentle), top: spring(0, presets.noWobble)}
        : {opacity: spring(prevStyles[i - 1].opacity, presets.gentle), top: spring(prevStyles[i - 1].top, presets.noWobble)}
    });
  }

  render() {
    return (
      <StaggeredMotion
        defaultStyles={this.getDefaultStyles()}
        styles={this.getStyles}>
        {(styles) => {
          return (
            <span className={this.props.className}>
              {styles.map((style, i) => {
                const elementStyle = {position: 'relative', opacity: style.opacity, top: style.top};
                return React.cloneElement(this.props.children[i], {key: i, style: elementStyle});
              })}
            </span>
          );
        }}
      </StaggeredMotion>
    );
  }
};

export default StaggeredTransition;

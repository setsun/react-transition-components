import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';

const CSSAnimationListener = Component => {
  return class TranstionListenerComponent extends React.Component {
    static propTypes = {
      children: PropTypes.node,
      onAnimationStart: PropTypes.func,
      onAnimationEnd: PropTypes.func,
      animationId: PropTypes.string,
    };

    componentDidMount() {
      const { onAnimationStart, onAnimationEnd, animationId } = this.props;

      this.animationStartEvent = this.element.addEventListener(
        'animationstart',
        event => onAnimationStart && onAnimationStart(event, animationId),
      );

      this.animationEndEvent = this.element.addEventListener(
        'animationend',
        event => onAnimationEnd && onAnimationEnd(event, animationId),
      );
    }

    componentWillUnmount() {
      this.element.removeEventListener(
        'animationstart',
        this.animationStartEvent,
      );
      this.element.removeEventListener('animationend', this.animationEndEvent);
    }

    render() {
      const { children, ...rest } = this.props;

      return (
        <Component
          ref={element => {
            this.element = findDOMNode(element);
          }}
          {...rest}
        >
          {children}
        </Component>
      );
    }
  };
};

export default CSSAnimationListener;

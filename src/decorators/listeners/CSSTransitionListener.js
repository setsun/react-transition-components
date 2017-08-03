import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';

const CSSTransitionListener = Component => {
  return class TranstionListenerComponent extends React.Component {
    static propTypes = {
      children: PropTypes.node,
      onTransitionStart: PropTypes.func,
      onTransitionEnd: PropTypes.func,
      animationId: PropTypes.string,
    };

    componentDidMount() {
      const { onTransitionStart, onTransitionEnd, animationId } = this.props;

      this.transitionStartEvent = this.element.addEventListener(
        'transitionstart',
        event => onTransitionStart && onTransitionStart(event, animationId),
      );

      this.transitionEndEvent = this.element.addEventListener(
        'transitionend',
        event => onTransitionEnd && onTransitionEnd(event, animationId),
      );
    }

    componentWillUnmount() {
      this.element.removeEventListener(
        'transitionstart',
        this.transitionStartEvent,
      );
      this.element.removeEventListener(
        'transitionend',
        this.transitionEndEvent,
      );
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

export default CSSTransitionListener;

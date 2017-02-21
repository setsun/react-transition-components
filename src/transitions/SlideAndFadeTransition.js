import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default ({
  children,
  className,
  ...rest
}) => {
  return (
    <CSSTransitionGroup
      className={`slide-fade-transition ${className ? className : ''}`}
      transitionName="slide-fade-transition"
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      {...rest}>
      {children}
    </CSSTransitionGroup>
  );
}

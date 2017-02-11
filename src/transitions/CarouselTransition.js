import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default ({
  children,
  ...rest
}) => {
  return (
    <CSSTransitionGroup
      className="carousel-transition"
      transitionName="carousel-transition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      {...rest}>
      {children}
    </CSSTransitionGroup>
  );
}

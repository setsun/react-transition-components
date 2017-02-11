import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default ({
  children,
  ...rest
}) => {
  return (
    <CSSTransitionGroup
      className="rotate-transition"
      transitionName="rotate-transition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      {...rest}>
      {children}
    </CSSTransitionGroup>
  );
}

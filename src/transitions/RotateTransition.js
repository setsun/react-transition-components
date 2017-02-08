import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const RotateTransition = ({
  children
}) => {
  return (
    <CSSTransitionGroup
      className="rotate-transition"
      transitionName="rotate-transition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
      {children}
    </CSSTransitionGroup>
  );
};

export default RotateTransition;

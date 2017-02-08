import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const ScaleTransition = ({
  children
}) => {
  return (
    <CSSTransitionGroup
      className="scale-transition"
      transitionName="scale-transition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
      {children}
    </CSSTransitionGroup>
  );
};

export default ScaleTransition;

import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const ExpandTransition = ({
  children
}) => {
  return (
    <CSSTransitionGroup
      className="expand-transition"
      transitionName="expand-transition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
      {children}
    </CSSTransitionGroup>
  );
};

export default ExpandTransition;

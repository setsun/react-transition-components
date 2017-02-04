import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default ({children}) => {
  return (
    <CSSTransitionGroup
      className="fade-transition"
      transitionName="fade-transition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
      {children}
    </CSSTransitionGroup>
  );
}

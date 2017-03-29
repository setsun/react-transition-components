import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from '../utils/classNames';

const ExpandTransition = ({
  children,
  className
}) => {
  return (
    <CSSTransitionGroup
      className={classNames('expand-transition', {className})}
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

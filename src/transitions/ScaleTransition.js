import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'utils/classNames';

const ScaleTransition = ({
  children,
  className
}) => {
  return (
    <CSSTransitionGroup
      className={classNames('scale-transition', {className})}
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

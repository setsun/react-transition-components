import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from '../utils/classNames';

export default ({
  children,
  className,
  ...rest
}) => {
  return (
    <CSSTransitionGroup
      className={classNames('slide-fade-transition', {className})}
      transitionName="slide-fade-transition"
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      {...rest}>
      {children}
    </CSSTransitionGroup>
  );
}

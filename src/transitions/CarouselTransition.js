import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from '../utils/classNames';

export default ({
  children,
  className,
}) => {
  return (
    <CSSTransitionGroup
      className={classNames('carousel-transition', {className})}
      transitionName="carousel-transition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
      {children}
    </CSSTransitionGroup>
  );
}

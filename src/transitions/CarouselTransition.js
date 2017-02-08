import React from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const CarouselTransition = ({
  children
}) => {
  return (
    <CSSTransitionGroup
      className="carousel-transition"
      transitionName="carousel-transition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
      {children}
    </CSSTransitionGroup>
  );
};

export default CarouselTransition;

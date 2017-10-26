import React, { PropTypes } from 'react';
import { CSSTransition } from 'react-transition-group';

function getTransitionName(direction) {
  return `slide-${direction}`;
}

const SlideTransition = ({ children, className, direction, ...rest }) => {
  return (
    <CSSTransition
      classNames={getTransitionName(direction)}
      appear={true}
      timeout={500}
      {...rest}
    >
      {children}
    </CSSTransition>
  );
};

export default SlideTransition;

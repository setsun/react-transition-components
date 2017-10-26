import React, { PropTypes } from 'react';
import { CSSTransition } from 'react-transition-group';

function getTransitionName(direction = 'left') {
  return `flip-${direction}`;
}

const FlipTransition = ({ children, className, direction, ...rest }) => {
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

export default FlipTransition;

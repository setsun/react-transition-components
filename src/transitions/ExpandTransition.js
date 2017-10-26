import React from 'react';
import { CSSTransition } from 'react-transition-group';

function getTransitionName(orientation) {
  return `expand-${orientation}`;
}

const ExpandTransition = ({ children, className, orientation, ...rest }) => {
  return (
    <CSSTransition
      classNames={getTransitionName(orientation)}
      appear={true}
      timeout={5000}
      {...rest}
    >
      {children}
    </CSSTransition>
  );
};

export default ExpandTransition;

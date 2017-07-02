import React from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from '../utils/classNames';

function getTransitionName(orientation) {
  return `expand-${orientation}`;
}

const ExpandTransition = ({ children, className, orientation, ...rest }) => {
  return (
    <CSSTransition
      className={classNames('expand-transition', { className })}
      classNames={getTransitionName(orientation)}
      appear={true}
      timeout={50000}
      {...rest}
    >
      {children}
    </CSSTransition>
  );
};

export default ExpandTransition;

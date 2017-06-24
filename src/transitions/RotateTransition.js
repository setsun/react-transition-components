import React from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from '../utils/classNames';

export default ({ children, className, ...rest }) => {
  return (
    <CSSTransition
      className={classNames('rotate-transition', { className })}
      classNames="rotate"
      appear={true}
      timeout={500}
      {...rest}
    >
      {children}
    </CSSTransition>
  );
};

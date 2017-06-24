import React from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from '../utils/classNames';

export default ({ children, appear, className, ...rest }) => {
  return (
    <CSSTransition
      className={classNames('fade-transition', { className })}
      classNames="fade"
      timeout={300}
      appear={appear}
      {...rest}
    >
      {children}
    </CSSTransition>
  );
};

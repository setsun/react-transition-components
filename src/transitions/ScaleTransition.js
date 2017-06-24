import React from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from '../utils/classNames';

const ScaleTransition = ({ children, className, ...rest }) => {
  return (
    <CSSTransition
      className={classNames('scale-transition', { className })}
      classNames="scale"
      appear={true}
      timeout={500}
      {...rest}
    >
      {children}
    </CSSTransition>
  );
};

export default ScaleTransition;

import React from 'react';
import {CSSTransition} from 'react-transition-group';
import classNames from '../utils/classNames';

export default ({
  children,
  className,
  ...rest
}) => {
  return (
    <CSSTransition
      className={classNames('fade-transition', {className})}
      classNames="fade-transition"
      appear={true}
      timeout={500}
      {...rest}>
      {children}
    </CSSTransition>
  );
}

import React from 'react';
import {CSSTransition} from 'react-transition-group';
import classNames from '../utils/classNames';

const ExpandTransition = ({
  children,
  className,
  ...rest
}) => {
  return (
    <CSSTransition
      className={classNames('expand-transition', {className})}
      classNames="expand-transition"
      appear={true}
      timeout={500}
      {...rest}>
      {children}
    </CSSTransition>
  );
};

export default ExpandTransition;

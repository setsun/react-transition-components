import React, { PropTypes } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from '../utils/classNames';

function getTransitionName(direction = 'left') {
  return `flip-${direction}`;
}

const FlipTransition = ({
  children,
  className,
  direction,
  ...rest
}) => {
  return (
    <CSSTransition
      className={classNames('flip-transition', { className })}
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

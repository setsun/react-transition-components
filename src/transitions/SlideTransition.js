import React, { PropTypes } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from '../utils/classNames';
import DIRECTIONS from '../constants/directions';

function getTransitionName(direction) {
  return `slide-${direction}`;
}

const SlideTransition = ({ children, className, direction, ...rest }) => {
  return (
    <CSSTransition
      className={classNames('slide-transition', { className })}
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

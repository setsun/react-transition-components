import React, { PropTypes } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from '../utils/classNames';

function getTransitionName(reverse) {
  const modifier = reverse ? 'reverse' : 'standard';
  return `flip-transition--${modifier}`;
}

const FlipTransition = ({ children, className, reverse, ...rest }) => {
  return (
    <CSSTransition
      className={classNames('flip-transition', { className })}
      classNames="flip"
      appear={true}
      timeout={500}
      {...rest}
    >
      {children}
    </CSSTransition>
  );
};

export default FlipTransition;

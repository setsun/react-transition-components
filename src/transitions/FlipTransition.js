import React, { PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'utils/classNames';

function getTransitionName(reverse) {
  const modifier = reverse ? 'reverse' : 'standard';
  return `flip-transition--${modifier}`;
}

const FlipTransition = ({
  children,
  className,
  reverse
}) => {
  return (
    <CSSTransitionGroup
      className={classNames('flip-transition', {className})}
      transitionName="flip-transition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
      {children}
    </CSSTransitionGroup>
  );
};

FlipTransition.propTypes = {
  children: PropTypes.node,
  reverse: PropTypes.bool,
};

export default FlipTransition;

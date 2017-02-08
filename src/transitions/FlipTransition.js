import React, { PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

function getTransitionName(reverse) {
  const modifier = reverse ? 'reverse' : 'standard';
  return `flip-transition--${modifier}`;
}

const FlipTransition = ({
  children,
  reverse
}) => {
  return (
    <CSSTransitionGroup
      className="flip-transition"
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

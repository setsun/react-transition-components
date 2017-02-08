import React, {PropTypes} from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import DIRECTIONS from '../constants/directions';

function getTransitionName(direction) {
  return `slide-transition--${direction}`;
}

const SlideTransition = ({
  children,
  direction
}) => {
  return (
    <CSSTransitionGroup
      className="slide-transition"
      transitionName={getTransitionName(direction)}
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
      {children}
    </CSSTransitionGroup>
  );
};

SlideTransition.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(DIRECTIONS).isRequired,
};

export default SlideTransition;

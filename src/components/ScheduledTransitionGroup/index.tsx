// @flow

import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

export const scheduleTypes = {
  parallel: 'parallel',
  sequential: 'sequential',
  staggered: 'staggered',
};

type Props = {
  type: SCHEDULE_TYPES.parallel | SCHEDULE_TYPES.sequential | SCHEDULE_TYPES.staggered,
  delay?: number,
}

class ScheduledTransitionGroup extends React.Component<Props> {
  static defaultProps = {
    type: scheduleTypes.parallel,
  };

  render() {
    return (
      <TransitionGroup>
        {this.props.children}
      </TransitionGroup>
    );
  }
}

export default ScheduledTransitionGroup;

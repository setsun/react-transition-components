// @flow

import React from 'react';
import transitionFactory from '../factory';
import { opacity, translate } from '../presets';
import type { TransitionProps } from '../types/index';

type SlideTransitionProps = TransitionProps & {
  direction: string,
};

const SlideTopTransition = transitionFactory([translate.top, opacity]);
const SlideBottomTransition = transitionFactory([translate.bottom, opacity]);
const SlideLeftTransition = transitionFactory([translate.left, opacity]);
const SlideRightTransition = transitionFactory([translate.right, opacity]);

class SlideTransition extends React.Component<SlideTransitionProps> {
  static defaultProps = {
    direction: 'left',
  };

  render() {
    const { direction, ...rest } = this.props;

    switch (direction) {
      case 'left':
        return <SlideLeftTransition {...rest} />;
      case 'right':
        return <SlideRightTransition {...rest} />;
      case 'top':
        return <SlideTopTransition {...rest} />;
      case 'bottom':
        return <SlideBottomTransition {...rest} />;
    }
  }
}

export default SlideTransition;

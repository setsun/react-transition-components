// @flow

import React from 'react';
import transitionFactory, {
  opacity,
  translate,
} from 'react-transition-factory';
import type { TransitionProps } from 'react-transition-factory';
import { directions } from '../constants';

type SlideTransitionProps = TransitionProps & {
  direction: directions.left | directions.right | directions.top | directions.bottom,
};

const SlideTopTransition = transitionFactory(translate.top, opacity);
const SlideBottomTransition = transitionFactory(translate.bottom, opacity);
const SlideLeftTransition = transitionFactory(translate.left, opacity);
const SlideRightTransition = transitionFactory(translate.right, opacity);

class SlideTransition extends React.Component<SlideTransitionProps> {
  static defaultProps = {
    direction: directions.left,
  };

  render() {
    const { direction, ...rest } = this.props;

    switch (direction) {
      case directions.left:
        return <SlideLeftTransition {...rest} />;
      case directions.right:
        return <SlideRightTransition {...rest} />;
      case directions.top:
        return <SlideTopTransition {...rest} />;
      case directions.bottom:
        return <SlideBottomTransition {...rest} />;
    }
  }
}

export default SlideTransition;

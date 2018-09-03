// @flow

import React from 'react';
import choreography from '../../core';
import { opacity, translate } from '../../presets';
import { TransitionProps } from '../../types';;
import { directions } from '../constants';

type SlideTransitionProps = TransitionProps & {
  direction: directions.left | directions.right | directions.top | directions.bottom,
};

const SlideTopTransition = choreography(translate.top, opacity);
const SlideBottomTransition = choreography(translate.bottom, opacity);
const SlideLeftTransition = choreography(translate.left, opacity);
const SlideRightTransition = choreography(translate.right, opacity);

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

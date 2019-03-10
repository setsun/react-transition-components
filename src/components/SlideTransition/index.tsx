import * as React from 'react';
import createTransition from '../../createTransition';
import { opacity, translate } from '../../presets';
import { TransitionProps } from '../../types';;
import { directions } from '../constants';

type SlideTransitionProps = TransitionProps & {
  direction: directions,
};

const SlideTopTransition = createTransition(translate.top, opacity);
const SlideBottomTransition = createTransition(translate.bottom, opacity);
const SlideLeftTransition = createTransition(translate.left, opacity);
const SlideRightTransition = createTransition(translate.right, opacity);

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

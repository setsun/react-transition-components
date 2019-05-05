import createTransition from '../../createTransition';
import { withFade } from '../FadeTransition';
import { TransitionComponentProps } from '../../types';
import defaultTransformStyle from '../defaultTransformStyle';

type Props = TransitionComponentProps & {
  x?: {
    start: number,
    end: number,
  },
  y?: {
    start: number,
    end: number,
  },
  fade?: boolean,
}

const transitionStyles = (props: Props) => {
  const { fade } = props;
  const x = (props.x || { start: 0, end: 0 });
  const y = (props.y || { start: 0, end: 0 });

  return withFade(fade, {
    entering: { transform: `skew(${x.start}deg, ${y.start}deg)` },
    entered: { transform: `skew(${x.end}deg, ${y.end}deg)` },
    exiting: { transform: `skew(${x.start}deg, ${y.start}deg)` },
    exited: { transform: `skew(${x.start}deg, ${y.start}deg)` },
  });
};

const SkewTransition: React.SFC<Props> = createTransition(
  transitionStyles,
  defaultTransformStyle,
);

SkewTransition.defaultProps = {
  ...SkewTransition.defaultProps,
  x: {
    start: 45,
    end: 0,
  },
  y: {
    start: 45,
    end: 0,
  },
  fade: true,
};

SkewTransition.displayName = 'SkewTransition';

export default SkewTransition;

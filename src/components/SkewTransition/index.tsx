import createTransition from '../../createTransition';
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

  return {
    entering: { transform: `skew(${x.start}deg, ${y.start}deg)`, opacity: (fade ? 0 : undefined) },
    entered: { transform: `skew(${x.end}deg, ${y.end}deg)`, opacity: (fade ? 1 : undefined) },
    exiting: { transform: `skew(${x.start}deg, ${y.start}deg)`, opacity: (fade ? 0 : undefined) },
    exited: { transform: `skew(${x.start}deg, ${y.start}deg)`, opacity: (fade ? 0 : undefined) },
  };
};

const SkewTransition: React.SFC<Props> = createTransition(
  transitionStyles,
  defaultTransformStyle,
);

SkewTransition.defaultProps = {
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

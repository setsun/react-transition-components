import createTransition from '../../createTransition';
import { TransitionComponentProps } from '../../types';

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

const SkewTransition: React.SFC<Props> = createTransition({
  from: (props: Props) => {
    const x = (props.x || { start: 0, end: 0 });
    const y = (props.y || { start: 0, end: 0 });

    return { transform: `skew(${x.start}deg, ${y.start}deg)` };
  },
  enter: (props: Props) => {
    const x = (props.x || { start: 0, end: 0 });
    const y = (props.y || { start: 0, end: 0 });

    return { transform: `skew(${x.end}deg, ${y.end}deg)` };
  }
});

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

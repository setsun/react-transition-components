import createTransition from '../../createTransition';
import { TransitionComponentProps, TweenProp } from '../../types';

type Props = TransitionComponentProps & {
  x?: TweenProp;
  y?: TweenProp;
  fade?: boolean;
};

const baseTween = { start: 0, end: 0 };

const getSkewProperties = (props) => {
  const x = (props.x || baseTween);
  const y = (props.y || baseTween);
  return { x, y };
};

const SkewTransition: React.SFC<Props> = createTransition({
  from: (props: Props) => {
    const { fade } = props;
    const { x, y } =  getSkewProperties(props);
    return { transform: `skew(${x.start}deg, ${y.start}deg)`, opacity: (fade && 0) };
  },
  enter: (props: Props) => {
    const { fade } = props;
    const { x, y } =  getSkewProperties(props);
    return { transform: `skew(${x.end}deg, ${y.end}deg)`, opacity: (fade && 1) };
  }
});

SkewTransition.defaultProps = {
  ...SkewTransition.defaultProps,
  x: { start: 30, end: 0 },
  y: { start: 30, end: 0 },
  fade: true,
};

SkewTransition.displayName = 'SkewTransition';

export default SkewTransition;

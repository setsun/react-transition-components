import createTransition from '../../createTransition';
import { TransitionComponentProps, TweenProp } from '../../types';

type Props = TransitionComponentProps & {
  x?: TweenProp;
  y?: TweenProp;
  z?: TweenProp;
  fade?: boolean;
}

const baseTween = { start: 0, end: 1 };

const basePreset = {
  x: baseTween,
  y: baseTween,
  z: baseTween,
};

const getScaleProperties = (props: Props) => {
  const x = (props.x || baseTween);
  const y = (props.y || baseTween);
  const z = (props.z || baseTween);

  return { x, y, z };
};

const ScaleTransition: React.SFC<Props> = createTransition({
  from: (props: Props) => {
    const { fade } = props;
    const { x, y, z } = getScaleProperties(props);
    return { transform: `scale3d(${x.start}, ${y.start}, ${z.start})`, opacity: (fade && 0) };
  },
  enter: (props: Props) => {
    const { fade } = props;
    const { x, y, z } = getScaleProperties(props);
    return { transform: `scale3d(${x.end}, ${y.end}, ${z.end})`, opacity: (fade && 1) };
  }
});

ScaleTransition.defaultProps = {
  ...ScaleTransition.defaultProps,
  ...basePreset,
  fade: true,
};

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

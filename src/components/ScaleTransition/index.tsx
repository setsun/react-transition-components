import createTransition from '../../createTransition';
import { TransitionComponentProps } from '../../types';

type Props = TransitionComponentProps & {
  start?: number,
  end?: number,
  fade?: boolean,
}

export enum presets {
  all = 'all',
  x = 'x',
  y = 'y',
  z = 'z',
};

const basePreset = {
  x: {
    start: 0,
    end: 1,
  },
  y: {
    start: 0,
    end: 1,
  },
  z: {
    start: 0,
    end: 1,
  },
}

const presetMap = {
  [presets.all]: basePreset,
  [presets.x]: {
    ...basePreset,
    y: {
      start: 1,
      end: 1,
    },
    z: {
      start: 1,
      end: 1,
    }
  }
}

const getScaleProperties = (props: Props) => {
  const x = (props.x || { start: 0, end: 0 });
  const y = (props.y || { start: 0, end: 0 });
  const z = (props.z || { start: 0, end: 0 });

  return { x, y, z };
};

const ScaleTransition: React.SFC<Props> = createTransition({
  from: (props: Props) => {
    const { fade } = props;
    const { x, y, z } = getScaleProperties(props);
    return { transform: `scale3d(${x.start}, ${y.start}, ${z.start})`, opacity: (fade ? 0 : undefined) };
  },
  enter: (props: Props) => {
    const { fade } = props;
    const { x, y, z } = getScaleProperties(props);
    return { transform: `scale3d(${x.end}, ${y.end}, ${z.end})`, opacity: (fade ? 1 : undefined) };
  }
});

ScaleTransition.defaultProps = {
  ...ScaleTransition.defaultProps,
  ...presetMap[presets.all],
  fade: true,
};

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

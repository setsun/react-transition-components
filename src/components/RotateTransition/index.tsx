import createTransition from '../../createTransition';
import { TransitionComponentProps, TweenProp } from '../../types';

export enum presets {
  x = 'x',
  y = 'y',
  z = 'z'
};

type Preset = keyof typeof presets;

type Props = TransitionComponentProps & {
  preset?: Preset;
  x?: number;
  y?: number;
  z?: number;
  a?: TweenProp;
  fade?: boolean;
}

const basePreset = {
  x: 0,
  y: 0,
  z: 0,
  a: {
    start: 90,
    end: 0,
  },
};

const presetMap = {
  [presets.x]: {
    ...basePreset,
    x: 1,
  },
  [presets.y]: {
    ...basePreset,
    y: 1,
  },
  [presets.z]: {
    ...basePreset,
    z: 1,
  },
};

const getRotateProperties = (props: Props) => {
  const { preset } = props;
  return presetMap[preset] || props || basePreset;
};

const RotateTransition: React.SFC<Props> = createTransition({
  from: (props) => {
    const { fade } = props;
    const { x, y, z, a } = getRotateProperties(props);
    return { transform: `rotate3d(${x}, ${y}, ${z}, ${a.start}deg)`, opacity: (fade && 0) };
  },
  enter: (props) => {
    const { fade } = props;
    const { x, y, z, a } = getRotateProperties(props);
    return { transform: `rotate3d(${x}, ${y}, ${z}, ${a.end}deg)`, opacity: (fade && 1) };
  },
  transitionProperty: 'transform, opacity'
});

RotateTransition.defaultProps = {
  ...RotateTransition.defaultProps,
  ...presetMap[presets.z],
  preset: undefined,
  fade: true,
};

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

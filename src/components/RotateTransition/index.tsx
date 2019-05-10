import createTransition from '../../createTransition';
import { TransitionComponentProps } from '../../types';

export enum presets {
  x = 'x',
  y = 'y',
  z = 'z'
};

type Props = TransitionComponentProps & {
  preset?: presets,
  start?: number,
  end?: number,
  fade?: boolean,
}

const basePreset = {
  x: 0,
  y: 0,
  z: 0,
  a: {
    start: 0,
    end: 0,
  },
};

const presetMap = {
  [presets.x]: {
    x: 1,
    y: 0,
    z: 0,
    a: {
      start: 90,
      end: 0,
    },
  },
  [presets.y]: {
    x: 0,
    y: 1,
    z: 0,
    a: {
      start: 90,
      end: 0,
    },
  },
  [presets.z]: {
    x: 0,
    y: 0,
    z: 1,
    a: {
      start: 90,
      end: 0,
    },
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
    return { transform: `rotate3d(${x}, ${y}, ${z}, ${a.start}deg)`, opacity: (fade ? 0 : undefined) };
  },
  enter: (props) => {
    const { fade } = props;
    const { x, y, z, a } = getRotateProperties(props);
    return { transform: `rotate3d(${x}, ${y}, ${z}, ${a.end}deg)`, opacity: (fade ? 1 : undefined) };
  },
});

RotateTransition.defaultProps = {
  ...RotateTransition.defaultProps,
  ...presetMap[presets.z],
  preset: undefined,
  fade: true,
};

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

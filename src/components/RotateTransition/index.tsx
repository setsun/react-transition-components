import createTransition from '../../createTransition';
import { withFade } from '../FadeTransition';
import { TransitionComponentProps } from '../../types';
import defaultTransformStyle from '../defaultTransformStyle';

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

const transitionStyles = (props: Props) => {
  const { fade, preset } = props;
  const style = presetMap[preset] || props || basePreset;
  const { x, y, z, a } = style;

  return withFade(fade, {
    entering: { transform: `rotate3d(${x}, ${y}, ${z}, ${a.start}deg)` },
    entered: { transform: `rotate3d(${x}, ${y}, ${z}, ${a.end}deg)` },
    exiting: { transform: `rotate3d(${x}, ${y}, ${z}, ${a.start}deg)` },
    exited: { transform: `rotate3d(${x}, ${y}, ${z}, ${a.start}deg)` },
  });
}

const RotateTransition: React.SFC<Props> = createTransition(
  transitionStyles,
  defaultTransformStyle,
);

RotateTransition.defaultProps = {
  ...RotateTransition.defaultProps,
  ...presetMap[presets.z],
  preset: undefined,
  fade: true,
};

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

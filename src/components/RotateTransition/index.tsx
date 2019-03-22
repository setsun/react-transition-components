import createTransition from '../../createTransition';
import { TransitionComponentProps } from '../../types';
import defaultTransformStyle from '../defaultTransformStyle';

type Props = TransitionComponentProps & {
  start?: number,
  end?: number,
  fade?: boolean,
}

export enum presets {
  x = 'x',
  y = 'y',
  z = 'z'
};

const presetMap = {
  [presets.x]: {
    x: 1,
    y: 0,
    z: 0,
    a: {
      start: 180,
      end: 0,
    },
  },
  [presets.y]: {
    x: 0,
    y: 1,
    z: 0,
    a: {
      start: 180,
      end: 0,
    },
  },
  [presets.z]: {
    x: 0,
    y: 0,
    z: 1,
    a: {
      start: 180,
      end: 0,
    },
  },
};

const transitionStyles = (props: Props) => {
  const { fade, preset } = props;
  const presetValue = presetMap[preset] || {};
  const x = (presetValue.x || props.x || 0);
  const y = (presetValue.x || props.y || 0);
  const z = (presetValue.z || props.z || 0);
  const a = (presetValue.a || props.a || { start: 0, end: 0 });

  return {
    entering: { transform: `rotate3d(${x}, ${y}, ${z}, ${a.start}deg)`, opacity: (fade ? 0 : undefined), },
    entered: { transform: `rotate3d(${x}, ${y}, ${z}, ${a.end}deg)`, opacity: (fade ? 1 : undefined), },
    exiting: { transform: `rotate3d(${x}, ${y}, ${z}, ${a.start}deg)`, opacity: (fade ? 0 : undefined), },
    exited: { transform: `rotate3d(${x}, ${y}, ${z}, ${a.start}deg)`, opacity: (fade ? 0 : undefined), },
  };
}

const RotateTransition: React.SFC<Props> = createTransition(
  transitionStyles,
  defaultTransformStyle,
);

RotateTransition.defaultProps = {
  ...presetMap[presets.z],
  preset: undefined,
  fade: true,
};

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

import createTransition from '../../createTransition';
import { TransitionComponentProps } from '../../types';
import defaultTransformStyle from '../defaultTransformStyle';

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

const transitionStyles = (props: Props) => {
  const { fade } = props;
  const x = (props.x || { start: 0, end: 0 });
  const y = (props.y || { start: 0, end: 0 });
  const z = (props.z || { start: 0, end: 0 });

  return {
    entering: { transform: `scale3d(${x.start}, ${y.start}, ${z.start})`, opacity: (fade ? 0 : undefined) },
    entered: { transform: `scale3d(${x.end}, ${y.end}, ${z.end})`, opacity: (fade ? 1 : undefined) },
    exiting: { transform: `scale3d(${x.start}, ${y.start}, ${z.start})`, opacity: (fade ? 0 : undefined) },
    exited: { transform: `scale3d(${x.start}, ${y.start}, ${z.start})`, opacity: (fade ? 0 : undefined) },
  };
};

const ScaleTransition: React.SFC<Props> = createTransition(
  transitionStyles,
  defaultTransformStyle,
);

ScaleTransition.defaultProps = {
  ...ScaleTransition.defaultProps,
  ...presetMap[presets.all],
  fade: true,
};

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

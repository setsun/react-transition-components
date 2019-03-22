import createTransition from '../../createTransition';
import { TransitionComponentProps } from '../../types';
import defaultTransformStyle from '../defaultTransformStyle';

export enum presets {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
};

type Props = TransitionComponentProps & {
  preset?: presets,
  start?: number,
  end?: number,
  fade?: boolean,
}

const baseStyle = {
  x: {
    start: 0,
    end: 0,
  },
  y: {
    start: 0,
    end: 0,
  },
  z: {
    start: 0,
    end: 0,
  },
}

const presetMap = {
  top: {
    ...baseStyle,
    y: {
      start: -16,
      end: 0,
    },
  },
  bottom: {
    ...baseStyle,
    y: {
      start: 16,
      end: 0,
    },
  },
  left: {
    ...baseStyle,
    x: {
      start: -16,
      end: 0,
    }
  },
  right: {
    ...baseStyle,
    x: {
      start: 16,
      end: 0,
    },
  },
}

const transitionStyles = (props: Props) => {
  const { preset, fade } = props;
  const presetValue = presetMap[preset] || {};
  const x = (presetValue.x || props.x || { start: 0, end: 0 });
  const y = (presetValue.y || props.y || { start: 0, end: 0 });
  const z = (presetValue.z || props.z || { start: 0, end: 0 });

  return {
    entering: { transform: `translate3d(${x.start}px, ${y.start}px, ${z.start}px)`, opacity: (fade ? 0 : undefined) },
    entered: { transform: `translate3d(${x.end}px, ${y.end}px, ${z.end}px)`, opacity: (fade ? 1 : undefined) },
    exiting: { transform: `translate3d(${x.start}px, ${y.start}px, ${z.start}px)`, opacity: (fade ? 0 : undefined) },
    exited: { transform: `translate3d(${x.start}px, ${y.start}px, ${z.start}px)`, opacity: (fade ? 0 : undefined) },
  };
}

const TranslateTransition: React.SFC<Props> = createTransition(
  transitionStyles,
  defaultTransformStyle,
);

TranslateTransition.defaultProps = {
  ...presetMap[presets.top],
  fade: true,
}

export default TranslateTransition;

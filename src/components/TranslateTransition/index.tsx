import createTransition from '../../createTransition';
import { TransitionComponentProps } from '../../types';
import defaultTransformStyle from '../defaultTransformStyle';
import { withFade } from '../FadeTransition';

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
  [presets.top]: {
    ...baseStyle,
    y: {
      start: -16,
      end: 0,
    },
  },
  [presets.bottom]: {
    ...baseStyle,
    y: {
      start: 16,
      end: 0,
    },
  },
  [presets.left]: {
    ...baseStyle,
    x: {
      start: -16,
      end: 0,
    }
  },
  [presets.right]: {
    ...baseStyle,
    x: {
      start: 16,
      end: 0,
    },
  },
}

const transitionStyles = (props: Props) => {
  const { preset, fade } = props;
  const style = presetMap[preset] || props || baseStyle;
  const { x, y, z } = style;

  return withFade(fade, {
    entering: { transform: `translate3d(${x.start}px, ${y.start}px, ${z.start}px)` },
    entered: { transform: `translate3d(${x.end}px, ${y.end}px, ${z.end}px)` },
    exiting: { transform: `translate3d(${x.start}px, ${y.start}px, ${z.start}px)` },
    exited: { transform: `translate3d(${x.start}px, ${y.start}px, ${z.start}px)` },
  });
}

const TranslateTransition: React.SFC<Props> = createTransition(
  transitionStyles,
  defaultTransformStyle,
);

TranslateTransition.defaultProps = {
  ...TranslateTransition.defaultProps,
  ...presetMap[presets.top],
  preset: undefined,
  fade: true,
}

export default TranslateTransition;

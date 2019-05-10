import createTransition from '../../createTransition';
import { TransitionComponentProps, TweenProp } from '../../types';

export enum presets {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
};

type Props = TransitionComponentProps & {
  preset?: presets;
  x?: TweenProp;
  y?: TweenProp;
  z?: TweenProp;
  fade?: boolean;
}

const baseTween = { start: 0, end: 0 };

const baseStyle = {
  x: baseTween,
  y: baseTween,
  z: baseTween,
};

const presetMap = {
  [presets.top]: {
    ...baseStyle,
    y: { start: -16, end: 0 },
  },
  [presets.bottom]: {
    ...baseStyle,
    y: { start: 16, end: 0 },
  },
  [presets.left]: {
    ...baseStyle,
    x: { start: -16, end: 0 },
  },
  [presets.right]: {
    ...baseStyle,
    x: { start: 16, end: 0 },
  },
}

const getTranslateProperties = (props: Props) => {
  const { preset } = props;
  return presetMap[preset] || props || baseStyle;
}

const TranslateTransition: React.SFC<Props> = createTransition({
  from: (props: Props) => {
    const { fade } = props;
    const { x, y, z } = getTranslateProperties(props);
    return { transform: `translate3d(${x.start}px, ${y.start}px, ${z.start}px)`, opacity: (fade && 0) };
  },
  enter: (props: Props) => {
    const { fade } = props;
    const { x, y, z } = getTranslateProperties(props);
    return { transform: `translate3d(${x.end}px, ${y.end}px, ${z.end}px)`, opacity: (fade && 1) };
  },
});

TranslateTransition.defaultProps = {
  ...TranslateTransition.defaultProps,
  ...presetMap[presets.top],
  preset: undefined,
  fade: true,
}

export default TranslateTransition;

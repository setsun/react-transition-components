import createTransition from '../../createTransition';
import { TransitionComponentProps, directions } from '../../types';

type Props = TransitionComponentProps & {
  direction: directions,
  start: number,
  end: number,
  fade: boolean,
}

const transitionStylesByDirection = {
  top: ({ start, end, fade }: Props) => ({
    entering: { transform: `translate(0, -${start}px)`, opacity: (fade ? 0 : undefined) },
    entered: { transform: `translate(0, ${end}px)`, opacity: (fade ? 1 : undefined) },
    exiting: { transform: `translate(0, -${start}px)`, opacity: (fade ? 0 : undefined) },
    exited: { transform: `translate(0, -${start}px)`, opacity: (fade ? 0 : undefined) },
  }),
  bottom: ({ start, end, fade }: Props) => ({
    entering: { transform: `translate(0, ${start}px)`, opacity: (fade ? 0 : undefined) },
    entered: { transform: `translate(0, ${end}px)`, opacity: (fade ? 1 : undefined) },
    exiting: { transform: `translate(0, ${start}px)`, opacity: (fade ? 0 : undefined) },
    exited: { transform: `translate(0, ${start}px)`, opacity: (fade ? 0 : undefined) },
  }),
  left: ({ start, end, fade }: Props) => ({
    entering: { transform: `translate(-${start}px, 0)`, opacity: (fade ? 0 : undefined) },
    entered: { transform: `translate(0, ${end}px)`, opacity: (fade ? 1 : undefined) },
    exiting: { transform: `translate(-${start}px, 0)`, opacity: (fade ? 0 : undefined) },
    exited: { transform: `translate(-${start}px, 0)`, opacity: (fade ? 0 : undefined) },
  }),
  right: ({ start, end, fade }: Props) => ({
    entering: { transform: `translate(${start}px, 0)`, opacity: (fade ? 0 : undefined) },
    entered: { transform: `translate(0, ${end}px)`, opacity: (fade ? 1 : undefined) },
    exiting: { transform: `translate(${start}px, 0)`, opacity: (fade ? 0 : undefined) },
    exited: { transform: `translate(${start}px, 0)`, opacity: (fade ? 0 : undefined) },
  }),
};

const transitionStyles = (props: Props) => transitionStylesByDirection[props.direction](props);

const SlideTransition: React.SFC<Props> = createTransition(
  transitionStyles,
);

SlideTransition.defaultProps = {
  direction: directions.top,
  fade: true,
  start: 16,
  end: 0,
}

export default SlideTransition;

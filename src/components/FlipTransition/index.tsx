import * as React from 'react';
import createTransition from '../../createTransition';
import { TransitionComponentProps, directions } from '../../types';

type Props = TransitionComponentProps & {
  direction: directions
}

const defaultStyleByDirection = {
  top: { transformOrigin: 'top', perspectiveOrigin: 'top', perspective: '0' },
  bottom: { transformOrigin: 'bottom', perspectiveOrigin: 'bottom', perspective: '0' },
  left: { transformOrigin: 'left', perspectiveOrigin: 'left', perspective: '0' },
  right: { transformOrigin: 'right', perspectiveOrigin: 'right', perspective: '0' }
};

const defaultStyle = ({ direction }: Props) => defaultStyleByDirection[direction];

const transitionStylesByDirection = {
  top: ({ start, end, fade }: Props) => ({
    entering: { transform: `rotate3d(1, 0, 0, ${start}turn)`, opacity: (fade ? 0 : undefined) },
    entered: { transform: `rotate3d(1, 0, 0, ${end}turn)`, opacity: (fade ? 1 : undefined) },
    exiting: { transform: `rotate3d(1, 0, 0, ${start}turn)`, opacity: (fade ? 0 : undefined) },
    exited: { transform: `rotate3d(1, 0, 0, ${start}turn)`, opacity: (fade ? 0 : undefined) },
  }),
  bottom: ({ start, end, fade }: Props) => ({
    entering: { transform: `rotate3d(1, 0, 0, -${start}turn)`, opacity: (fade ? 0 : undefined) },
    entered: { transform: `rotate3d(1, 0, 0, ${end}turn)`, opacity: (fade ? 1 : undefined) },
    exiting: { transform: `rotate3d(1, 0, 0, -${start}turn)`, opacity: (fade ? 0 : undefined) },
    exited: { transform: `rotate3d(1, 0, 0, -${start}turn)`, opacity: (fade ? 0 : undefined) },
  }),
  left: ({ start, end, fade }: Props) => ({
    entering: { transform: `rotate3d(0, 1, 0, ${start}turn)`, opacity: (fade ? 0 : undefined) },
    entered: { transform: `rotate3d(0, 1, 0, ${end}turn)`, opacity: (fade ? 1 : undefined) },
    exiting: { transform: `rotate3d(0, 1, 0, ${start}turn)`, opacity: (fade ? 0 : undefined) },
    exited: { transform: `rotate3d(0, 1, 0, ${start}turn)`, opacity: (fade ? 0 : undefined) },
  }),
  right: ({ start, end, fade }: Props) => ({
    entering: { transform: `rotate3d(0, 1, 0, -${start}turn)`, opacity: (fade ? 0 : undefined) },
    entered: { transform: `rotate3d(0, 1, 0, ${end}turn)`, opacity: (fade ? 1 : undefined) },
    exiting: { transform: `rotate3d(0, 1, 0, -${start}turn)`, opacity: (fade ? 0 : undefined) },
    exited: { transform: `rotate3d(0, 1, 0, -${start}turn)`, opacity: (fade ? 0 : undefined) },
  }),
};

const transitionStyles = (props: Props) => transitionStylesByDirection[props.direction](props);

const FlipTransition: React.SFC<Props> = createTransition(
  transitionStyles,
  defaultStyle,
);

FlipTransition.defaultProps = {
  direction: directions.left,
  start: 0.25,
  end: 0,
  fade: true,
}

export default FlipTransition;

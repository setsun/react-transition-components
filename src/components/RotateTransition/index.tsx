import createTransition from '../../createTransition';
import { TransitionComponentProps } from '../../types';

type Props = TransitionComponentProps & {
  start: number,
  end: number,
  fade: boolean,
}

const transitionStyles = ({ start, end, fade }: Props) => ({
  entering: { transform: `rotate(${start}deg)`, opacity: (fade ? 0 : undefined), },
  entered: { transform: `rotate(${end}deg)`, opacity: (fade ? 1 : undefined), },
  exiting: { transform: `rotate(${start}deg)`, opacity: (fade ? 0 : undefined), },
  exited: { transform: `rotate(${start}deg)`, opacity: (fade ? 0 : undefined), },
});

const RotateTransition: React.SFC<Props> = createTransition(
  transitionStyles,
);

RotateTransition.defaultProps = {
  start: 90,
  end: 0,
  fade: true,
};

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

import createTransition from '../../createTransition';
import { TransitionComponentProps } from '../../types';

type Props = TransitionComponentProps & {
  start: number,
  end: number,
  fade: boolean,
}

const transitionStyles = ({ start, end, fade }: Props) => ({
  entering: { transform: `scale(${start})`, opacity: (fade ? 0 : undefined) },
  entered: { transform: `scale(${end})`, opacity: (fade ? 1 : undefined) },
  exiting: { transform: `scale(${start})`, opacity: (fade ? 0 : undefined) },
  exited: { transform: `scale(${start})`, opacity: (fade ? 0 : undefined) },
});

const ScaleTransition: React.SFC<Props> = createTransition(
  transitionStyles
);

ScaleTransition.defaultProps = {
  start: 0,
  end: 1,
  fade: true,
};

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

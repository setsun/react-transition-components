import createTransition from '../../createTransition';
import { TransitionComponentProps } from '../../types';

type Props = TransitionComponentProps & {
  start?: number;
  end?: number;
};

const FadeTransition: React.SFC<Props> = createTransition({
  from: ({ start }) => ({ opacity: start }),
  enter: ({ end }) => ({ opacity: end }),
});

FadeTransition.defaultProps = {
  ...FadeTransition.defaultProps,
  start: 0,
  end: 1,
};

FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;

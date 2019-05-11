import createTransition from '../../createTransition';
import { TransitionComponentProps } from '../../types';

type Props = TransitionComponentProps & {
  start?: number;
  end?: number;
};

const FadeTransition: React.SFC<Props> = createTransition({
  from: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0, transform: 'translateY(-32px)' }
});

FadeTransition.defaultProps = {
  ...FadeTransition.defaultProps,
  start: 0,
  end: 1,
};

FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;

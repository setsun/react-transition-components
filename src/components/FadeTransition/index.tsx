import createTransition from '../../createTransition';
import { TransitionStyles, TransitionComponentProps } from '../../types';

type Props = TransitionComponentProps & {
  start?: number,
  end?: number,
}

// utility function for other components to use, to conditionally add a
// opacity transition to their transition style objects.
export const withFade = (fade: boolean, styles: any): TransitionStyles => ({
  entering: { ...styles.entering, opacity: (fade ? 0 : undefined) },
  entered: { ...styles.entered, opacity: (fade ? 1 : undefined) },
  exiting: { ...styles.exiting, opacity: (fade ? 0 : undefined) },
  exited: { ...styles.exited, opacity: (fade ? 0 : undefined) },
});

const transitionStyles = ({ start, end }) => ({
  entering: { opacity: start },
  entered: { opacity: end },
  exiting: { opacity: start },
  exited: { opacity: start },
});

const defaultStyle = {};

const transitionProperty = 'opacity';

const FadeTransition: React.SFC<Props> = createTransition(
  transitionStyles,
  defaultStyle,
  transitionProperty,
);

FadeTransition.defaultProps = {
  ...FadeTransition.defaultProps,
  start: 0,
  end: 1,
};

FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;

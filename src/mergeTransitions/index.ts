import merge from 'lodash.merge';

type TransitionStyle = { [key: string]: React.CSSProperties };

const mergeCSSTransforms = (
  styleA: React.CSSProperties,
  styleB: React.CSSProperties
) => {
  const transformA = styleA ? styleA.transform.trim() : '';
  const transformB = styleB ? styleB.transform.trim() : '';

  return `${transformA} ${transformB}`;
};

const mergeTransitions = (...transitions: TransitionStyle[]) => {
  return transitions.reduce((finalStyle, style) => {
    const transformStyles = {
      entering: {
        transform: mergeCSSTransforms(finalStyle.entering, style.entering)
      },
      entered: {
        transform: mergeCSSTransforms(finalStyle.entered, style.entered)
      },
      exiting: {
        transform: mergeCSSTransforms(finalStyle.exiting, style.exiting)
      },
      exited: {
        transform: mergeCSSTransforms(finalStyle.exited, style.exited)
      }
    };

    const mergedStyles = merge(finalStyle, style);

    return merge(mergedStyles, transformStyles);
  }, {});
};

export default mergeTransitions;

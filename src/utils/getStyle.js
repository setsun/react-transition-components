export default (defaultStyle, transitionStyles, state) => {
  return {
    ...defaultStyle,
    ...transitionStyles[state],
  };
};

export default (defaultStyle, transitionStyles, state) => {
  return {
    display: 'inline-block',
    ...defaultStyle,
    ...transitionStyles[state],
  };
};

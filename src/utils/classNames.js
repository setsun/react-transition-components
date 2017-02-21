export default (invariantClassName, classNamePairs) => {
  const classNames = [invariantClassName];

  for (let className in classNamePairs) {
    if (classNamePairs[className]) {
      classNames.push(className);
    }
  }

  return classNames.join(' ');
};

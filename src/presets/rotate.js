export default {
  transition: 'transform',
  getStartStyle: (start = 0) => `rotate(${start}turn)`,
  getEndStyle: (end = 1) => `rotate(${end}turn)`,
};

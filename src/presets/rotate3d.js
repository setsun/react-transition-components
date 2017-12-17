export default {
  top: {
    transition: 'transform',
    getStartStyle: (start = 0.25) => `rotate3d(1, 0, 0, ${start}turn)`,
    getEndStyle: (end = 0) => `rotate3d(1, 0, 0, ${end}turn)`,
  },
  bottom: {
    transition: 'transform',
    getStartStyle: (start = 0.25) => `rotate3d(1, 0, 0, -${start}turn)`,
    getEndStyle: (end = 0) => `rotate3d(1, 0, 0, ${end}turn)`,
  },
  left: {
    transition: 'transform',
    getStartStyle: (start = 0.25) => `rotate3d(0, 1, 0, ${start}turn)`,
    getEndStyle: (end = 0) => `rotate3d(0, 1, 0, ${end}turn)`,
  },
  right: {
    transition: 'transform',
    getStartStyle: (start = 0.25) => `rotate3d(0, 1, 0, -${start}turn)`,
    getEndStyle: (end = 0) => `rotate3d(0, 1, 0, ${end}turn)`,
  },
};

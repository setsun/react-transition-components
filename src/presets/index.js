import type { TransitionConfig } from '../types/index';

const opacity: TransitionConfig = {
  transition: 'opacity',
  getStartStyle: (start = 0) => start,
  getEndStyle: (end = 1) => end,
};

const rotate: TransitionConfig = {
  transition: 'transform',
  getStartStyle: (start = 0) => `rotate(${start}turn)`,
  getEndStyle: (end = 1) => `rotate(${end}turn)`,
};

const rotate3d: {
  top: TransitionConfig,
  bottom: TransitionConfig,
  left: TransitionConfig,
  right: TransitionConfig,
} = {
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

const scale: {
  all: TransitionConfig,
  vertical: TransitionConfig,
  horizontal: TransitionConfig,
} = {
  all: {
    transition: 'transform',
    getStartStyle: (start = 0) => `scale(${start})`,
    getEndStyle: (end = 1) => `scale(${end})`,
  },
  vertical: {
    transition: 'transform',
    getStartStyle: (start = 0) => `scaleY(${start})`,
    getEndStyle: (end = 1) => `scaleY(${end})`,
  },
  horizontal: {
    transition: 'transform',
    getStartStyle: (start = 0) => `scaleX(${start})`,
    getEndStyle: (end = 1) => `scaleX(${end})`,
  },
};

const translate: {
  top: TransitionConfig,
  bottom: TransitionConfig,
  left: TransitionConfig,
  right: TransitionConfig,
} = {
  top: {
    transition: 'transform',
    getStartStyle: (start = 16) => `translate(0, -${start}px)`,
    getEndStyle: (end = 0) => `translate(0, ${end}px)`,
  },
  bottom: {
    transition: 'transform',
    getStartStyle: (start = 16) => `translate(0, ${start}px)`,
    getEndStyle: (end = 0) => `translate(0, ${end}px)`,
  },
  left: {
    transition: 'transform',
    getStartStyle: (start = 16) => `translate(-${start}px, 0)`,
    getEndStyle: (end = 0) => `translate(${end}px, 0)`,
  },
  right: {
    transition: 'transform',
    getStartStyle: (start = 16) => `translate(${start}px, 0)`,
    getEndStyle: (end = 0) => `translate(${end}px, 0)`,
  },
};

export { opacity, rotate, rotate3d, scale, translate };

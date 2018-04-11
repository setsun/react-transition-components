import transitionFactory from './factory';
import { opacity, rotate, rotate3d, scale, translate } from './presets';
import type {
  TransitionProps,
  TransitionConfig,
  TransitionStates,
} from './types/index';

export { opacity };
export { rotate };
export { rotate3d };
export { scale };
export { translate };
export type { TransitionProps };
export type { TransitionConfig };
export type { TransitionStates };

export default transitionFactory;

// @flow

import transitionFactory from '../factory';
import { opacity } from '../presets';

const FadeTransition = transitionFactory([opacity]);

FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;

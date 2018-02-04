// @flow

import transitionFactory from '../factory';
import { scale } from '../presets';

const ScaleTransition = transitionFactory([scale.all]);

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

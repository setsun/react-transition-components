// @flow

import choreography from '../factory/choreography';
import { scale } from '../presets';

const ScaleTransition = choreography([scale.all]);

ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

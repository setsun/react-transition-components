// @flow

import choreography from '../decorator/choreography';
import { opacity } from '../presets';

const FadeTransition = choreography([opacity]);

FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;

// @flow

import choreography from '../factory/choreography';
import { opacity } from '../presets';

const FadeTransition = choreography([opacity]);

FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;

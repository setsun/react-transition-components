// @flow

import choreography from '../factory/choreography';
import { opacity, rotate } from '../presets';

const RotateTransition = choreography([rotate, opacity]);

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

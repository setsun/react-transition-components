// @flow

import choreography from '../decorator/choreography';
import { opacity, rotate } from '../presets';

const RotateTransition = choreography([rotate, opacity]);

RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

import choreography from '../../core';
import { scale } from '../../presets';

const ScaleTransition = choreography(scale.all);
ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

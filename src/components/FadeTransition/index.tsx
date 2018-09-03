import choreography from '../../core';
import  { opacity } from '../../presets';

const FadeTransition = choreography(opacity);
FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;

import createTransition from '../../createTransition';
import  { opacity } from '../../presets';

const FadeTransition = createTransition(opacity);
FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;

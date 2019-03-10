import createTransition from '../../createTransition';
import { scale } from '../../presets';

const ScaleTransition = createTransition(scale.all);
ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

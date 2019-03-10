import createTransition from '../../createTransition';
import { opacity, rotate } from '../../presets';

const RotateTransition = createTransition(rotate, opacity);
RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

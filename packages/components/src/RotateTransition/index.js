// @flow

import transitionFactory, { opacity, rotate } from 'react-transition-factory';

const RotateTransition = transitionFactory(rotate, opacity);
RotateTransition.displayName = 'RotateTransition';

export default RotateTransition;

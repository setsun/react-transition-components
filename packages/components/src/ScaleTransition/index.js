// @flow

import transitionFactory, { scale } from 'react-transition-factory';

const ScaleTransition = transitionFactory(scale.all);
ScaleTransition.displayName = 'ScaleTransition';

export default ScaleTransition;

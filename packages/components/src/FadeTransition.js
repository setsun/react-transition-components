// @flow

import transitionFactory, { opacity } from 'react-transition-factory';

const FadeTransition = transitionFactory(opacity);
FadeTransition.displayName = 'FadeTransition';

export default FadeTransition;

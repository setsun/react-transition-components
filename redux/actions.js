export const ActionTypes = {
  TRANSITION_STARTED: 'TRANSITION_STARTED',
  TRANSITION_ENDED: 'TRANSITION_ENDED',
};

export const onTransitionStart = id => ({
  type: ActionTypes.TRANSITION_STARTED,
  payload: { id },
});

export const onTransitionEnd = id => ({
  type: ActionTypes.TRANSITION_ENDED,
  payload: { id },
});

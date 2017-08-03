import { ActionTypes } from './actions';

const AnimationStatus = {
  UNINITIALIZED: 'UNINITIALIZED',
  STARTED: 'STARTED',
  ENDED: 'ENDED',
};

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TRANSITION_STARTED: {
      return Object.assign(
        {
          [action.payload.id]: {
            status: AnimationStatus.STARTED,
          },
        },
        state,
      );
    }
    case ActionTypes.TRANSITION_ENDED: {
      return Object.assign(
        {
          [action.payload.id]: {
            status: AnimationStatus.ENDED,
          },
        },
        state,
      );
    }
    default:
      return state;
  }
};

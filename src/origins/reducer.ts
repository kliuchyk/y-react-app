import { ORIGINS_ACTIONS } from './actionTypes';

export type Origin = string;

export interface OriginsState {
  origins: [] | Origin[];
}

const initialState: OriginsState = {
  origins: [],
};

interface Action {
  type: string;
  origins?: [] | Origin[];
}

export const originReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ORIGINS_ACTIONS.GET_ORIGINS_SUCCESS:
      return {
        ...state,
        origins: [action.origins],
      };
    default:
      return state;
  }
};
  
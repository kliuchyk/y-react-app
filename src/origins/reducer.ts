import { ORIGINS_ACTIONS } from './actionTypes';

export interface Origin {
  value: string;
  displayName: string;
}

export type OriginsState = [] | Origin[];

const initialState: OriginsState = [];

interface Action {
  type: string;
  origins?: [] | Origin[];
}

export const originReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ORIGINS_ACTIONS.GET_ORIGINS_SUCCESS:
      return action.origins;
    default:
      return state;
  }
};

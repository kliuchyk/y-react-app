import { createSelector } from 'reselect';

import { RootState } from '../app/redux/rootReducer';

export const selectOriginsState = (state: RootState) => state.origins;
export const selectOriginsList = createSelector(
  selectOriginsState,
  (state) => state.origins
);

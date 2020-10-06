import { Origin } from './reducer';
import { ORIGINS_ACTIONS } from './actionTypes';

export const getOrigins = () => ({
  type: ORIGINS_ACTIONS.GET_ORIGINS_REQUEST,
});

export const setOriginsList = (origins: [] | Origin[]) => ({
  type: ORIGINS_ACTIONS.GET_ORIGINS_SUCCESS,
  origins,
});

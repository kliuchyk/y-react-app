import { FILTER_ACTION_TYPES } from './actionTypes';
import { FiltersState } from './reducer';

export const setNewFilters = (filters: FiltersState, isEditable: boolean) => ({
  type: FILTER_ACTION_TYPES.CHANGE_FILTERS,
  filters,
  isEditable,
});

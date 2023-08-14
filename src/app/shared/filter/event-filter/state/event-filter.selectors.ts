import { createFeatureSelector, createSelector } from '@ngrx/store';
import { eventFilterStateKey } from '../constants/event-filter.constants';
import { createEventParams } from '../utils/params.utils';
import { EventFilterState } from './event-filter.reducer';

export const selectEventFilterState = createFeatureSelector<EventFilterState>(eventFilterStateKey);

export const selectFiltersActive = createSelector(
  selectEventFilterState,
  state => state?.params
    && Object.values(state.params).some((value) => {
      switch(true) {
        case Array.isArray(value):
          return !!(value as Array<unknown>)?.length;
        default:
          return !!value;
      }
    })
);

export const selectCategories = createSelector(
  selectEventFilterState,
  state => state.categories
);

export const selectSuburbs = createSelector(
  selectEventFilterState,
  state => state.suburbs
);

export const selectTargetGroups = createSelector(
  selectEventFilterState,
  state => state.targetGroups
);

export const selectRawFilterParams = createSelector(
  selectEventFilterState,
  state => state?.params
);

export const selectEventFilterParams = createSelector(
  selectRawFilterParams,
  params => params
    ? createEventParams(params)
    : undefined
);
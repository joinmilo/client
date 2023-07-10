import { createFeatureSelector, createSelector } from '@ngrx/store';
import { contestFilterStateKey } from '../constants/contest.filter.constants';

import { createContestParams } from '../utils/params.utils';
import { ContestFilterState } from './contest-filter.reducer';

export const selectContestFilterState = createFeatureSelector<ContestFilterState>(contestFilterStateKey);

export const selectFiltersActive = createSelector(
  selectContestFilterState,
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

export const selectTypes = createSelector(
  selectContestFilterState,
  state => state.types
);

export const selectRawFilterParams = createSelector(
  selectContestFilterState,
  state => state?.params
);

export const selectContestFilterParams = createSelector(
  selectRawFilterParams,
  params => createContestParams(params)
);
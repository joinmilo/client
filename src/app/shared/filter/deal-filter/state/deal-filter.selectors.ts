import { createFeatureSelector, createSelector } from '@ngrx/store';
import { dealFilterStateKey } from '../constants/deal-filter.constants';
import { createDealParams } from '../utils/params.utils';
import { DealFilterState } from './deal-filter.reducer';

export const selectDealFilterState = createFeatureSelector<DealFilterState>(dealFilterStateKey);

export const selectFiltersActive = createSelector(
  selectDealFilterState,
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
  selectDealFilterState,
  state => state.categories
);

export const selectRawFilterParams = createSelector(
  selectDealFilterState,
  state => state?.params
);

export const selectDealFilterParams = createSelector(
  selectRawFilterParams,
  params => params 
    ? createDealParams(params)
    : undefined
);
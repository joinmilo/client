import { createFeatureSelector, createSelector } from '@ngrx/store';
import { mediaFilterStateKey } from '../constants/media-filter.constants';
import { MediaFilterState } from './media-filter.reducer';
import { createMediaParams } from '../utils/params.utils';

export const selectMediaFilterState = createFeatureSelector<MediaFilterState>(mediaFilterStateKey);

export const selectFiltersActive = createSelector(
  selectMediaFilterState,
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
  selectMediaFilterState,
  state => state.categories
);

export const selectRawFilterParams = createSelector(
  selectMediaFilterState,
  state => state?.params
);

export const selectMediaFilterParams = createSelector(
  selectRawFilterParams,
  params => createMediaParams(params)
);

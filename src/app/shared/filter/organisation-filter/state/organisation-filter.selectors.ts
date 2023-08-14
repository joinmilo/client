import { createFeatureSelector, createSelector } from '@ngrx/store';
import { organisationFilterStateKey } from '../constants/organisation-filter.constants';
import { createOrganisationParams } from '../utils/params.utils';
import { OrganisationFilterState } from './organisation-filter.reducer';

export const selectOrganisationFilterState = createFeatureSelector<OrganisationFilterState>(organisationFilterStateKey);

export const selectFiltersActive = createSelector(
  selectOrganisationFilterState,
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

export const selectRawFilterParams = createSelector(
  selectOrganisationFilterState,
  state => state?.params
);

export const selectOrganisationFilterParams = createSelector(
  selectRawFilterParams,
  params => params 
    ? createOrganisationParams(params)
    : undefined
);
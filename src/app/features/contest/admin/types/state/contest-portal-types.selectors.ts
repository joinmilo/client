import { createFeatureSelector, createSelector } from '@ngrx/store';
import { contestAdminTypesStateKey } from '../constants/contest-admin-types.constants';
import { ContestAdminTypesState } from './contest-portal-types.reducer';

export const selectContestAdminTypesState = createFeatureSelector<ContestAdminTypesState>(contestAdminTypesStateKey);


export const selectTypesData = createSelector(
  selectContestAdminTypesState,
  state => state.typesData
);

export const selectParams = createSelector(
  selectContestAdminTypesState,
  state => state.params
);
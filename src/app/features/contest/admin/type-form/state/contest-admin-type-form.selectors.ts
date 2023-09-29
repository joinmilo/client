import { createFeatureSelector, createSelector } from '@ngrx/store';

import { contestAdminTypeFormStateKey } from '../constants/contest-admin-type-form.constants';
import { ContestTypeAdminFormState } from './contest-admin-type-form.reducer';


export const selectContestAdminFormState = createFeatureSelector<ContestTypeAdminFormState>(contestAdminTypeFormStateKey);

export const selectEditableContestType = createSelector(
  selectContestAdminFormState,
  state => state.editContestType
);
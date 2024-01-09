import { createFeatureSelector, createSelector } from '@ngrx/store';
import { contestAdminFormStateKey } from '../constants/contest-admin-form.constants';
import { ContestAdminFormState } from './contest-admin-form.reducer';

export const selectContestAdminFormState = createFeatureSelector<ContestAdminFormState>(contestAdminFormStateKey);

export const selectContest = createSelector(
    selectContestAdminFormState,
    state => state.contest
);

export const selectContestTypes = createSelector(
    selectContestAdminFormState,
    state => state.types
);
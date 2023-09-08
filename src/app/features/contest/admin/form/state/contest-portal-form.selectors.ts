import { createFeatureSelector } from '@ngrx/store';
import { contestAdminFormStateKey } from '../constants/contest-admin-form.constants';
import { ContestAdminFormState } from './contest-portal-form.reducer';

export const selectContestAdminFormState = createFeatureSelector<ContestAdminFormState>(contestAdminFormStateKey);


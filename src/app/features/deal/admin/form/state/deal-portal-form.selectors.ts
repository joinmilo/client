import { createFeatureSelector } from '@ngrx/store';
import { dealAdminFormStateKey } from '../constants/deal-admin-form.constants';
import { DealAdminFormState } from './deal-portal-form.reducer';

export const selectDealAdminFormState = createFeatureSelector<DealAdminFormState>(dealAdminFormStateKey);


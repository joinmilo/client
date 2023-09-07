import { createFeatureSelector } from '@ngrx/store';
import { eventAdminFormStateKey } from '../constants/event-admin-form.constants';
import { EventAdminFormState } from './event-portal-form.reducer';

export const selectEventAdminFormState = createFeatureSelector<EventAdminFormState>(eventAdminFormStateKey);


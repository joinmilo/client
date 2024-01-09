import { createFeatureSelector } from '@ngrx/store';
import { contestPortalDetailsParticipationFormStateKey } from '../constants/contest-portal-details-participation-form.constants';
import { ContestPortalDetailsParticipationFormState } from './contest-portal-details-participation-form.reducer';


export const selectContestAdminDetailsParticipationFormState = createFeatureSelector<ContestPortalDetailsParticipationFormState>(contestPortalDetailsParticipationFormStateKey);


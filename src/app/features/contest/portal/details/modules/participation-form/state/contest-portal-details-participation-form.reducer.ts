import { createReducer, on } from '@ngrx/store';
import { ContestEntity, Maybe } from 'src/app/core/api/generated/schema';
import { ContestPortalDetailsParticipationFormActions } from './contest-portal-details-participation-form.actions';


export interface ContestPortalDetailsParticipationFormState {
  details?: Maybe<ContestEntity>,
  slug?: Maybe<string>;
}

export const initialState: ContestPortalDetailsParticipationFormState = {
};

export const contestPortalDetailsParticipationFormReducer = createReducer(
  initialState,

  on(
    ContestPortalDetailsParticipationFormActions.setDetails,
    (state, action): ContestPortalDetailsParticipationFormState => 
      ({ ...state, details: action.contest })
  ),

  on(
    ContestPortalDetailsParticipationFormActions.getDetails,
    (state, action): ContestPortalDetailsParticipationFormState => 
      ({ ...state, slug: action.slug })
  ),
);

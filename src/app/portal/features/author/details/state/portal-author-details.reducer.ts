import { createReducer, on } from '@ngrx/store';
import { Maybe, UserContextEntity } from 'src/schema/schema';
import { AuthorDetailsActions } from './portal-author-details.actions';

export interface AuthorDetailsState {
  details?: Maybe<UserContextEntity>
}

export const initialState: AuthorDetailsState = {
};

export const authorReducer = createReducer(
  initialState,

  on(AuthorDetailsActions.setDetails, (state, action): AuthorDetailsState => (
    { ...state, details: action.author }
  )),
  
);

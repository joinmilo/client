import { createReducer, on } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { UserContextEntity } from 'src/schema/schema';
import { AuthorActions } from './author.actions';

export interface AuthorState {
  authorDetails?: Maybe<UserContextEntity>
}

export const initialState: AuthorState = {
};

export const authorReducer = createReducer(
  initialState,

  on(AuthorActions.setAuthorDetails, (state, action): AuthorState => (
    { ...state, authorDetails: action.author }
  )),
);

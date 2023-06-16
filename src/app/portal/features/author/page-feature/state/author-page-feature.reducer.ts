import { createReducer, on } from '@ngrx/store';
import { Maybe, UserContextEntity } from 'src/schema/schema';
import { AuthorPageFeatureActions } from './author-page-feature.actions';

export interface AuthorPageFeatureState {
  recentAuthors?: Maybe<UserContextEntity[]>,
}

export const initialState: AuthorPageFeatureState = { };

export const authorPageFeatureReducer = createReducer(
  initialState,

  on(AuthorPageFeatureActions.setRecentAuthors, (state, action): AuthorPageFeatureState => (
    { ...state, recentAuthors: action.authors }
  )),
);

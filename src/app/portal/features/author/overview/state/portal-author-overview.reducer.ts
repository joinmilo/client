import { createReducer, on } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { UserContextEntity } from 'src/schema/schema';
import { PortalAuthorOverviewActions } from './portal-author-overview.actions';

export interface PortalAuthorOverviewState {
  showAuthors?: Maybe<UserContextEntity[]>
}

export const initialState: PortalAuthorOverviewState = { };

export const authorReducer = createReducer(
  initialState,

  on(PortalAuthorOverviewActions.setRecentAuthors, (state, action): PortalAuthorOverviewState => (
    {...state, showAuthors: action.authors}
  )),  
);

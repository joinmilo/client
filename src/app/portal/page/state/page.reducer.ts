import { createReducer, on } from '@ngrx/store';
import { Maybe, PageEntity } from 'src/schema/schema';
import { PageActions } from './page.actions';

export interface PageState {
  page?: Maybe<PageEntity>,
}

export const initialState: PageState = { };

export const pageReducer = createReducer(
  initialState,

  on(PageActions.setCurrentPage, (state, action): PageState => (
    { ...state, page: action.page }
  )),

);

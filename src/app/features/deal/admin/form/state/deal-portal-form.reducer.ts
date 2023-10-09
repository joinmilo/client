import { createReducer, on } from '@ngrx/store';
import { DealCategoryEntity, DealEntity, Maybe } from 'src/app/core/api/generated/schema';
import { DealAdminFormActions } from './deal-admin-form.actions';

export interface DealAdminFormState {
  event?: Maybe<DealEntity>,
  categories?: Maybe<DealCategoryEntity[]>,
}

export const initialState: DealAdminFormState = { };

export const dealAdminFormReducer = createReducer(
  initialState,

  on(DealAdminFormActions.setDeal, (state, action): DealAdminFormState => (
    { ...state, event: action.deal }
  )),

  on(DealAdminFormActions.setCategories, (state, action): DealAdminFormState => (
    { ...state, categories: action.categories }
  )),

);

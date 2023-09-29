import { createReducer, on } from '@ngrx/store';
import { DealCategoryEntity, Maybe } from 'src/app/core/api/generated/schema';
import { DealAdminCategoryFormActions } from './deal-admin-category-form.actions';

export interface DealCategoryAdminFormState {
  editDealCategory?: Maybe<DealCategoryEntity>;
}

export const initialState: DealCategoryAdminFormState = {
};

export const dealAdminFormReducer = createReducer(
  initialState,

  on(DealAdminCategoryFormActions.categoryRetrieved, (state, action): DealCategoryAdminFormState => (
    { ...state, editDealCategory: action.entity }
  )),

  on(
    DealAdminCategoryFormActions.saved,
    DealAdminCategoryFormActions.cancelled,
    (state): DealCategoryAdminFormState => (
      { ...state, editDealCategory: undefined }
    )
  ),

);

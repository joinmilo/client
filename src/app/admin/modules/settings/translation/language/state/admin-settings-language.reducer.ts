import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_LanguageEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsLanguageActions } from './admin-settings-language.actions';

export interface AdminSettingsLanguageState {
  languages?: PageableList_LanguageEntity,
  params: FilterSortPaginateInput
}

export const initialState: AdminSettingsLanguageState = {
  params: {}
};

export const adminSettingsLanguageReducer = createReducer(
  initialState,

  on(AdminSettingsLanguageActions.updateParams, (state, action): AdminSettingsLanguageState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(AdminSettingsLanguageActions.setOverviewData, (state, action): AdminSettingsLanguageState => (
    { ...state, languages: action.languages }
  )),
);

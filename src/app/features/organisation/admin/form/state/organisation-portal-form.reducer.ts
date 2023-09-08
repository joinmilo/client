import { createReducer } from '@ngrx/store';
import { FilterSortPaginateInput } from 'src/app/core/api/generated/schema';

export interface OrganisationAdminFormState {
  params: FilterSortPaginateInput
}

export const initialState: OrganisationAdminFormState = {
  params: {}
};

export const organisationAdminFormReducer = createReducer(
  initialState,


);

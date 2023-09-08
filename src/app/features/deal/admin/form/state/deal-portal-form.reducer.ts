import { createReducer } from '@ngrx/store';
import { FilterSortPaginateInput } from 'src/app/core/api/generated/schema';

export interface DealAdminFormState {
  params: FilterSortPaginateInput
}

export const initialState: DealAdminFormState = {
  params: {}
};

export const dealAdminFormReducer = createReducer(
  initialState,


);

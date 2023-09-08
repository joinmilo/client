import { createReducer } from '@ngrx/store';
import { FilterSortPaginateInput } from 'src/app/core/api/generated/schema';

export interface ContestAdminFormState {
  params: FilterSortPaginateInput
}

export const initialState: ContestAdminFormState = {
  params: {}
};

export const contestAdminFormReducer = createReducer(
  initialState,


);

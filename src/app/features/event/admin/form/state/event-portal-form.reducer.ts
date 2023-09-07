import { createReducer } from '@ngrx/store';
import { FilterSortPaginateInput } from 'src/app/core/api/generated/schema';

export interface EventAdminFormState {
  params: FilterSortPaginateInput
}

export const initialState: EventAdminFormState = {
  params: {}
};

export const eventAdminFormReducer = createReducer(
  initialState,


);

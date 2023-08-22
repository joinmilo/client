import { createReducer } from '@ngrx/store';

export interface EventAdminDetailsState {
test?: boolean;
}

export const initialState:EventAdminDetailsState = {
};

export const eventAdminDetailsReducer = createReducer(
  initialState,


);

import { createReducer } from '@ngrx/store';

export interface CalendarState {
}

export const initialState: CalendarState = { };

export const calendarReducer = createReducer(
  initialState,
);

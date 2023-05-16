import { createReducer, on } from '@ngrx/store';
import { PasswordActions } from './password.actions';


export interface PasswordState {
  strengthRate: number,
}

export const initialState: PasswordState = {
  strengthRate: 0,
};

export const passwordReducer = createReducer(
  initialState,

  on(PasswordActions.setPasswordStrength, (state, action): PasswordState => (
    { ...state, strengthRate: action.rate }
  )),

  on(PasswordActions.resetPasswordStrength, (state): PasswordState => (
    { ...state, strengthRate: 0 }
  )),
);

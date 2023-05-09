import { createReducer, on } from '@ngrx/store';
import { Maybe } from 'src/schema/schema';
import { PasswordActions } from './password.actions';


export interface PasswordState {
  entropy?: Maybe<number>,
}

export const initialState: PasswordState = {
};

export const passwordReducer = createReducer(
  initialState,

  on(PasswordActions.setEntropy, (state, action): PasswordState => (
    { ...state, entropy: action.entropy}
  )),
);

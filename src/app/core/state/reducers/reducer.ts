import { Action, ActionReducer } from '@ngrx/store';
import { CoreUserState, coreUserReducer } from './core-user.reducer';
import { CoreState, coreReducer } from './core.reducer';

export interface AppState {
  core: CoreState;
  coreUser: CoreUserState,
}

export const appReducers = {
  core: coreReducer,
  coreUser: coreUserReducer,
};

export const localStorageMetaReducer = (reducer: ActionReducer<CoreUserState, Action>): ActionReducer<CoreUserState, Action> =>
  (state, action) => {

    const newState = reducer(state, action);
    // localStorage.setItem(appStateKey, JSON.stringify(newState));

    return newState;
  };
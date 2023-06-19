import { createReducer, on } from '@ngrx/store';
import { Maybe, UserContextEntity } from 'src/schema/schema';
import { FormPageFeatureActions } from './form-page-feature.actions';

export interface FormPageFeatureState {
  recentForms?: Maybe<UserContextEntity[]>,
}

export const initialState: FormPageFeatureState = { };

export const formPageFeatureReducer = createReducer(
  initialState,

  on(FormPageFeatureActions.setRecentForms, (state, action): FormPageFeatureState => (
    { ...state, recentForms: action.forms }
  )),
);

import { createFeatureSelector } from '@ngrx/store';
import { navigatorAdminFormChoiceStateKey } from '../constants/navigator-admin-form-choice.constants';
import { NavigatorAdminFormChoiceState } from './navigator-admin-form-choice.reducer';


export const selectNavigatorAdminFormChoiceState = createFeatureSelector<NavigatorAdminFormChoiceState>(navigatorAdminFormChoiceStateKey);


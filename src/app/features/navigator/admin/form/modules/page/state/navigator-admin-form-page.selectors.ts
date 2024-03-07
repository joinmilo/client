import { createFeatureSelector } from '@ngrx/store';
import { navigatorAdminFormPageStateKey } from '../constants/navigator-admin-form-page.constants';
import { NavigatorAdminFormPageState } from './navigator-admin-form-page.reducer';


export const selectNavigatorAdminFormPageState = createFeatureSelector<NavigatorAdminFormPageState>(navigatorAdminFormPageStateKey);


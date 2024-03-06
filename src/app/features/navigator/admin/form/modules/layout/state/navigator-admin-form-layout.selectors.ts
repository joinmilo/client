import { createFeatureSelector } from '@ngrx/store';
import { navigatorAdminFormLayoutStateKey } from '../constants/navigator-admin-form-layout.constants';
import { NavigatorAdminFormLayoutState } from './navigator-admin-form-layout.reducer';


export const selectNavigatorAdminFormLayoutState = createFeatureSelector<NavigatorAdminFormLayoutState>(navigatorAdminFormLayoutStateKey);


import { createFeatureSelector } from '@ngrx/store';
import { navigatorAdminFormOverviewStateKey } from '../constants/navigator-admin-form-overview.constants';
import { NavigatorAdminFormOverviewState } from './navigator-admin-form-page.reducer';


export const selectNavigatorAdminFormOverviewState = createFeatureSelector<NavigatorAdminFormOverviewState>(navigatorAdminFormOverviewStateKey);


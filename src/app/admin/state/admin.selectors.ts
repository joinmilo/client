import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminStateKey } from '../constants/admin.constants';
import { AdminMenuItem } from '../typings/menu';
import { AdminState } from './admin.reducer';

export const selectAdminState = createFeatureSelector<AdminState>(adminStateKey);

export const selectIsAdminMenuOpen = createSelector(
  selectAdminState,
  state => state.menuOpen
);

export const selectFeatures = createSelector(
  selectAdminState,
  state => state.features
);

export const selectMainRoutes = createSelector(
  selectAdminState,
  state => state.mainRoutes
);

export const selectAdminMainMenu = createSelector(
  selectFeatures,
  selectMainRoutes,
  (features, routes) => {
    return routes
      .map(mainRoute => {
        const feature = features
          ?.find(feature => feature.code === mainRoute.code)

        return {
          icon: feature?.icon,
          name: feature?.name, //TODO: This is a translatable!
          active: feature?.active,
          route: mainRoute?.routes.length === 1
            ? mainRoute.routes[0].path
            : undefined,
          childs: mainRoute?.routes.length > 1
            ? mainRoute?.routes.map(child => ({
                name: child?.data?.['label'],
                route: child.path
              }) as AdminMenuItem)
            : undefined
        } as AdminMenuItem
      })
      .filter(route => !!route.active) as AdminMenuItem[]
  }
);

export const selectAdminSettingsMenu = createSelector(
  selectAdminState,
  state => state.settingsMenu
);
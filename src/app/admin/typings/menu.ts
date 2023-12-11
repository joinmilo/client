import { Route } from '@angular/router'
import { Privilege } from 'src/app/core/typings/privilege'
import { SolidIcons } from 'src/assets/fontawesome/solid-icons'

export type AdminMenuItem = {
  active?: boolean,
  childs?: AdminMenuItem[],
  description?: string,
  icon?: SolidIcons,
  name?: string,
  privileges?: Privilege[],
  route?: string,

  comingSoon?: boolean,
}

export type AdminRoutes = {
  code: string,
  routes: AdminFeatureRoute[],
}

export interface AdminFeatureRoute extends Route {
  data: {
    label?: string,
    privileges?: Privilege[],
  }
}

export interface AdminSettingsRoute extends Route {
  data: AdminMenuItem,
}
import { Route } from '@angular/router'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { Privilege } from 'src/app/core/typings/privilege'

export type AdminMenuItem = {
  active?: boolean,
  childs?: AdminMenuItem[],
  description?: string,
  icon?: IconName,
  name?: string,
  privileges?: Privilege[],
  route?: string,
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
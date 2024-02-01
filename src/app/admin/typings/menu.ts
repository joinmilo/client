import { Route } from '@angular/router'
import { SolidIconsType } from 'ngx-cinlib/icons'
import { Privilege } from 'src/app/core/typings/privilege'

export type AdminMenuItem = {
  active?: boolean,
  childs?: AdminMenuItem[],
  description?: string,
  icon?: SolidIconsType,
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
import { Route, Routes } from '@angular/router'
import { IconName } from '@fortawesome/fontawesome-svg-core'

export type AdminMenuItem = {
  active?: boolean,
  childs?: AdminMenuItem[],
  description?: string,
  icon?: IconName,
  name?: string,
  route?: string,
}

export type AdminRoutes = {
  code: string,
  routes: Routes,
}

export interface AdminSettingsRoutes extends Route {
  data: AdminMenuItem,
}
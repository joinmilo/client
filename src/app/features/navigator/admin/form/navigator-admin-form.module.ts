import { NgModule } from '@angular/core';
import { NavigatorAdminFormLayoutModule } from './modules/layout/navigator-admin-form-layout.module';
import { NavigatorAdminFormRoutingModule } from './navigator-admin-form-routing.module';

const modules = [
  NavigatorAdminFormLayoutModule,
  NavigatorAdminFormRoutingModule,
];

@NgModule({
  imports: [
    ...modules,
  ],
  exports: [],
})
export class NavigatorAdminFormModule { }

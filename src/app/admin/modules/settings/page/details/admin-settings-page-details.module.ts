import { NgModule } from '@angular/core';
import { AdminSettingsPageDetailsRoutingModule } from './admin-settings-page-details-routing.module';
import { AdminSettingsPageDetailsLayoutModule } from './modules/layout/admin-settings-page-details-layout.module';

const modules = [
  AdminSettingsPageDetailsLayoutModule,
  AdminSettingsPageDetailsRoutingModule,
];

@NgModule({
  imports: [
    ...modules,
  ],
  exports: [],
})
export class AdminSettingsPageDetailsModule { }

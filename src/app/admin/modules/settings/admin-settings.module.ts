import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminSettingsAccessRoutingModule } from './access/admin-settings-access-routing.module';
import { AdminSettingsRoutingModule } from './admin-settings-routing.module';
import { AdminSettingsLocationRoutingModule } from './location/admin-settings-location.routing.module';
import { AdminSettingsPageRoutingModule } from './page/admin-settings-page.routing.module';
import { AdminSettingsStructureRoutingModule } from './structure/admin-settings-structure.routing.module';
import { AdminSettingsTranslationRoutingModule } from './translation/admin-settings-translation.routing.module';

const framework = [
  CommonModule,
];

const modules = [
  AdminSettingsPageRoutingModule,
  AdminSettingsStructureRoutingModule,
  AdminSettingsAccessRoutingModule,
  AdminSettingsLocationRoutingModule,
  AdminSettingsTranslationRoutingModule,
  AdminSettingsRoutingModule, //TODO: always last entry duet to order and redirect to 404, Remove 404 and put in AppRouter
];

@NgModule({
  imports: [
    ...framework,
    ...modules,
  ],
})
export class AdminSettingsModule { }

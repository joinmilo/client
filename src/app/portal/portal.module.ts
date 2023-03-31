import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortalCommonModule } from './common/common.module';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';

const components = [
  PortalComponent
];

const framework = [
  CommonModule,
  PortalRoutingModule
];

const modules = [
  PortalCommonModule,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...modules,
  ],
})
export class PortalModule { }

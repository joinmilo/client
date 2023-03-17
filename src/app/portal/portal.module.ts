/* eslint-disable  @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { PortalCommonModule } from './common/common.module';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';

const components: Type<any>[] = [
  PortalComponent
];

const framework: Type<any>[] = [
  CommonModule,
  PortalRoutingModule
];

const materials: Type<any>[] = [];

const modules: Type<any>[] = [
  PortalCommonModule,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
  ],
})
export class PortalModule { }

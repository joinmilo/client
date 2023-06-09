import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalUserDashboardComponent } from './components/portal-user-dashboard.component';
import { PortalUserDashboardRoutingModule } from './portal-user-dashboard-routing.module';

const components = [
  PortalUserDashboardComponent
];

const framework = [
  CommonModule
];

// const materials = [

// ];

const modules = [
  CoreModule, 
  PortalUserDashboardRoutingModule, 
  TitleModule
];

// const libs = [

// ];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    // ...materials,
    ...modules,
    // ...libs
  ],
  exports: [...components],
})
export class PortalUserDashboardModule {}

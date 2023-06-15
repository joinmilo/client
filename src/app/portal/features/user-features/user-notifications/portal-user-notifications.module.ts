import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalUserNotificationsComponent } from './components/portal-user-notifications.component';
import { PortalUserNotificationsRoutingModule } from './portal-user-notifications-routing.module';

const components = [
  PortalUserNotificationsComponent
];

const framework = [
  CommonModule
];

const materials = [
  MatDividerModule,
];

const modules = [
  CoreModule, 
  PortalUserNotificationsRoutingModule, 
  TitleModule,

];

// const libs = [

// ];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    // ...libs
  ],
  exports: [...components],
})
export class PortalUserNotificationsModule {}

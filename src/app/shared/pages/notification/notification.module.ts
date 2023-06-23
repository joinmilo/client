import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from '../../title/title.module';
import { NotificationComponent } from './component/notification.component';
import { NotificationRoutingModule } from './notification-routing.module';

const components = [
  NotificationComponent,
];

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatDividerModule,
];

const modules = [
  CoreModule,
  NotificationRoutingModule,

  TitleModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
  ],
  exports: [
    ...components,
  ],
})
export class NotificationModule { }

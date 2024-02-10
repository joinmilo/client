import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { NotificationComponent } from './component/notification.component';
import { NotificationRoutingModule } from './notification-routing.module';

const components = [
  NotificationComponent,
];

const framework = [
  CommonModule,
];

const libs = [
  PageTitleComponent
]

const materials = [
  MatButtonModule,
  MatDividerModule,
];

const modules = [
  CoreModule,
  NotificationRoutingModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...framework,
    ...libs,
    ...materials,
    ...modules,
  ],
  exports: [
    ...components,
  ],
})
export class NotificationModule { }

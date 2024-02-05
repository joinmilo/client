import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingComponent } from 'ngx-cinlib/layouts/loading';
import { PortalFooterModule } from '../portal/modules/footer/portal-footer.module';
import { PortalHeaderModule } from '../portal/modules/header/portal-header.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

const components = [
  UserComponent
];

const framework = [
  CommonModule,
  UserRoutingModule,
];

const modules = [
  PortalHeaderModule,
  PortalFooterModule,
];

const libs = [
  LoadingComponent,
]

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...modules,
    ...libs,
  ],
})
export class UserModule { }

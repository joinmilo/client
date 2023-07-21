import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortalFooterModule } from '../portal/shared/footer/portal-footer.module';
import { PortalHeaderModule } from '../portal/shared/header/portal-header.module';
import { LoadingComponent } from '../shared/loading/loading.component';
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

  LoadingComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...modules,
  ],
})
export class UserModule { }

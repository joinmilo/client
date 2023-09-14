import { NgModule } from '@angular/core';
import { DealAdminDetailsRoutingModule } from './deal-admin-details-routing.module';
import { DealAdminDetailsLayoutModule } from './modules/layout/deal-admin-details-layout.module';

const modules = [
  DealAdminDetailsLayoutModule,
  DealAdminDetailsRoutingModule,
];

@NgModule({
  imports: [
    ...modules,
  ],
  exports: [],
})
export class DealAdminDetailsModule { }

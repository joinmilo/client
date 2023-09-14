import { NgModule } from '@angular/core';
import { ContestAdminDetailsRoutingModule } from './contest-admin-details-routing.module';
import { ContestAdminDetailsLayoutModule } from './modules/layout/contest-admin-details-layout.module';

const modules = [
  ContestAdminDetailsLayoutModule,
  ContestAdminDetailsRoutingModule,
];

@NgModule({
  imports: [
    ...modules,
  ],
  exports: [],
})
export class ContestAdminDetailsModule { }

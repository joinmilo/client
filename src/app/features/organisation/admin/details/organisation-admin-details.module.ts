import { NgModule } from '@angular/core';
import { OrganisationAdminDetailsLayoutModule } from './modules/layout/organisation-admin-details-layout.module';
import { OrganisationAdminDetailsRoutingModule } from './organisation-admin-details-routing.module';

const modules = [
  OrganisationAdminDetailsLayoutModule,
  OrganisationAdminDetailsRoutingModule,
];

@NgModule({
  imports: [
    ...modules,
  ],
  exports: [],
})
export class OrganisationAdminDetailsModule { }

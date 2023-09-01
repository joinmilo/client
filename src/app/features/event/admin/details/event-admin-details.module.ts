import { NgModule } from '@angular/core';
import { EventAdminDetailsRoutingModule } from './event-admin-details-routing.module';
import { EventAdminDetailsLayoutModule } from './modules/layout/event-admin-details-layout.module';

const modules = [
  EventAdminDetailsLayoutModule,
  EventAdminDetailsRoutingModule,
];

@NgModule({
  imports: [
    ...modules,
  ],
  exports: [],
})
export class EventAdminDetailsModule { }

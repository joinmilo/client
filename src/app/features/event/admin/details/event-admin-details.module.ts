import { NgModule } from '@angular/core';
import { EventAdminDetailsRoutingModule } from './event-admin-details-routing.module';



const modules = [
  EventAdminDetailsRoutingModule,
];


@NgModule({
  imports: [
    ...modules,
  ],
  exports: [],
})
export class EventAdminDetailsModule { }

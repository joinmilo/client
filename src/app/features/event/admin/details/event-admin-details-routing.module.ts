import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventAdminDetailsComponent } from './components/event-admin-details.component';

const routes: Routes = [
  {
    path: '',
    component: EventAdminDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventAdminDetailsRoutingModule { }

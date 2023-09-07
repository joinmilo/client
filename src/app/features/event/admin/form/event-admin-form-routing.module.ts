import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventAdminFormComponent } from './component/event-admin-form.component';

const routes: Routes = [
  {
    path: '',
    component: EventAdminFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventAdminFormRoutingModule { }

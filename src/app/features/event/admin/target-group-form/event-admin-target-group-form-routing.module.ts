import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventAdminTargetGroupFormComponent } from './components/event-admin-target-group-form.component';


const routes: Routes = [
  {
    path: '',
    component: EventAdminTargetGroupFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventAdminTargetGroupFormRoutingModule { }

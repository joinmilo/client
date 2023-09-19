import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventAdminTargetGroupComponent } from './component/event-admin-target-group.component';

const routes: Routes = [
  {
    path: '',
    component: EventAdminTargetGroupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventAdminTargetGroupRoutingModule { }

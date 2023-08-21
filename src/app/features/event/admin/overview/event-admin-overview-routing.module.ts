import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventAdminOverviewComponent } from './component/event-admin-overview.component';

const routes: Routes = [
  {
    path: '',
    component: EventAdminOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventAdminOverviewRoutingModule { }

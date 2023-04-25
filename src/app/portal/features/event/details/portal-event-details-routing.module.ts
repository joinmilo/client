import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalEventDetailsComponent } from './components/details/portal-event-details.component';

const routes: Routes = [
  {
    path: '',
    component: PortalEventDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventPortalRoutingModule { }

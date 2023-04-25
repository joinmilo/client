import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { eventSlug } from '../details/constants/event-details.constant';
import { EventOverviewComponent } from './components/overview/event-overview.component';

const routes: Routes = [
  {
    path: '',
    component: EventOverviewComponent,
  },
  {
    path: `:${eventSlug}`,
    loadChildren: () => import('../details/event-details.module')
      .then((imported) => imported.PortalEventDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalEventOverviewRoutingModule { }

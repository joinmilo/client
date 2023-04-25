import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { eventSlug } from '../details/constants/event-details.constant';
import { PortalEventOverviewComponent } from './components/overview/portal-event-overview.component';

const routes: Routes = [
  {
    path: '',
    component: PortalEventOverviewComponent,
  },
  {
    path: `:${eventSlug}`,
    loadChildren: () => import('../details/portal-event-details.module')
      .then((imported) => imported.PortalEventDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalEventOverviewRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalEventDetailsComponent } from '../details/components/details/portal-event-details.component';
import { PortalEventOverviewComponent } from '../overview/components/overview/portal-event-overview.component';
import { EventCommentsComponent } from './components/comments/event-comments.component';
import { eventId } from './constants/event.constant';

const routes: Routes = [
  {
    path: `:${eventId}`,
    component: PortalEventDetailsComponent
  },

  {
    path: `comments/:${eventId}`,
    component: EventCommentsComponent
  }, 

  {
    path: '',
    component: PortalEventOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventPortalRoutingModule { }

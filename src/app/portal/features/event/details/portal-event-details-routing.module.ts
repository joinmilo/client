import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalEventCommentsComponent } from './components/comments/portal-event-comments.component';
import { PortalEventDetailsComponent } from './components/portal-event-details.component';

const routes: Routes = [
  {
    path: '',
    component: PortalEventDetailsComponent
  },
  {
    path: 'comments',
    component: PortalEventCommentsComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalEventDetailsRoutingModule { }

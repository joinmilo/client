import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalContestDetailsCommentsComponent } from './components/comments/portal-contest-details-comments.component';
import { PortalContestDetailsMediaComponent } from './components/media/portal-contest-details-media.component';
import { PortalContestDetailsComponent } from './components/portal-contest-details.component';

const routes: Routes = [
  {
    path: '',
    component: PortalContestDetailsComponent
  },
  {
    path: 'comments',
    component: PortalContestDetailsCommentsComponent
  },
  {
    path: 'media',
    component: PortalContestDetailsMediaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalContestDetailsRoutingModule { }

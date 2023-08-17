import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalArticleDetailsCommentsComponent } from './components/comments/portal-article-details-comments.component';
import { PortalArticleDetailsMediaComponent } from './components/media/portal-article-details-media.component';
import { PortalArticleDetailsComponent } from './components/portal-article-details.component';

const routes: Routes = [
  {
    path: '',
    component: PortalArticleDetailsComponent
  },
  {
    path: 'comments',
    component: PortalArticleDetailsCommentsComponent
  }, 
  {
    path: 'media',
    component: PortalArticleDetailsMediaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalArticleDetailsRoutingModule { }

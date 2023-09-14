import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { commentsRoute, searchRoute } from './constants/article-admin-details.constants';
import { ArticleAdminDetailsCommentsComponent } from './modules/comments/components/article-admin-details-comments.component';
import { ArticleAdminDetailsLandingComponent } from './modules/landing/components/article-admin-details-landing.component';
import { ArticleAdminDetailsSearchComponent } from './modules/search/component/article-admin-details-search.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/landing/article-admin-details-landing.module')
      .then((imported) => imported.ArticleAdminDetailsLandingModule),
    component: ArticleAdminDetailsLandingComponent
  },
    {
    path: searchRoute,
    loadChildren: () => import('./modules/search/article-admin-details-search.module')
      .then((imported) => imported.ArticleAdminDetailsSearchModule),
      component: ArticleAdminDetailsSearchComponent
  },
  {
    path: commentsRoute,
    loadChildren: () => import('./modules/comments/article-admin-details-comments.module')
      .then((imported) => imported.ArticleAdminDetailsCommentsModule),
    component: ArticleAdminDetailsCommentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleAdminDetailsRoutingModule { }


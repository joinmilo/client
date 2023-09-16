import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { commentsRoute, favoritesRoute, searchRoute, visitorsRoute } from './constants/article-admin-details.constants';
import { ArticleAdminDetailsCommentsComponent } from './modules/comments/components/article-admin-details-comments.component';
import { ArticleAdminDetailsFavoritesComponent } from './modules/favorites/components/article-admin-details-favorites.component';
import { ArticleAdminDetailsLandingComponent } from './modules/landing/components/article-admin-details-landing.component';
import { ArticleAdminDetailsSearchComponent } from './modules/search/component/article-admin-details-search.component';
import { ArticleAdminDetailsVisitorsComponent } from './modules/visitors/component/article-admin-details-visitors.component';

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
  {
    path: visitorsRoute,
    loadChildren: () => import('./modules/visitors/article-admin-details-visitors.module')
      .then((imported) => imported.ArticleAdminDetailsVisitorsModule),
    component: ArticleAdminDetailsVisitorsComponent
  },
  {
    path: favoritesRoute,
    loadChildren: () => import('./modules/favorites/article-admin-details-favorites.module')
      .then((imported) => imported.ArticleAdminDetailsFavoritesModule),
    component: ArticleAdminDetailsFavoritesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleAdminDetailsRoutingModule { }


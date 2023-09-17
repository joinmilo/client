import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { commentsRoute, favoritesRoute, ratingsRoute, searchRoute, visitorsRoute } from './constants/article-admin-details.constants';
import { ArticleAdminDetailsCommentsComponent } from './modules/comments/components/article-admin-details-comments.component';
import { ArticleAdminDetailsFavoritesComponent } from './modules/favorites/components/article-admin-details-favorites.component';
import { ArticleAdminDetailsLandingComponent } from './modules/landing/components/article-admin-details-landing.component';
import { ArticleAdminDetailsRatingComponent } from './modules/rating/component/article-admin-details-rating.component';
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
  {
    path: ratingsRoute,
    loadChildren: () => import('./modules/rating/article-admin-details-rating.module')
      .then((imported) => imported.ArticleAdminDetailsRatingModule),
    component: ArticleAdminDetailsRatingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleAdminDetailsRoutingModule { }


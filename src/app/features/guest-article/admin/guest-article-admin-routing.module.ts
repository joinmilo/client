import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AdminFeatureRoute } from 'src/app/admin/typings/menu';
import { articlesFeatureKey, guestArticlesFeatureKey } from 'src/app/core/constants/feature.constants';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { requireAnyPrivilege } from 'src/app/core/utils/privilege.utils';

const menuRoutes: AdminFeatureRoute[] = [
  {
    path: `${guestArticlesFeatureKey}`,
    loadChildren: () => import('src/app/features/guest-article/admin/overview/guest-article-admin-overview.module')
      .then((imported) => imported.GuestArticleAdminOverviewModule),
    data: {
      label: 'overview',
      privileges: ['articles_admin'],
    },
    canActivate: [requireAnyPrivilege('articles_admin')]
  },
  {
    path: `${guestArticlesFeatureKey}/publicAuthors`,
    loadChildren: () => import('src/app/features/guest-article/admin/public-author/guest-article-admin-authors.module')
      .then((imported) => imported.GuestArticleAdminPublicAuthorsModule),
    data: {
      label: 'publicAuthors',
      privileges: ['articles_admin'],
    },
    canActivate: [requireAnyPrivilege('articles_admin')]
  },
];

const routes: Routes = [
  {
    path: `${articlesFeatureKey}/:${slug}/form`,
    loadChildren: () => import('src/app/features/article/admin/form/article-admin-form.module')
      .then((imported) => imported.ArticleAdminFormModule),
    canActivate: [requireAnyPrivilege('articles_admin')]
  },
]

@NgModule({
  imports: [RouterModule.forChild([
    ...menuRoutes,
    ...routes,
  ])],
  exports: [RouterModule]
})
export class GuestArticleAdminRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addMainRoutes({
      code: guestArticlesFeatureKey,
      routes: menuRoutes,
    }));
  }
}

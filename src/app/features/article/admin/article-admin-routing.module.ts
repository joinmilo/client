import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { articlesFeatureKey } from 'src/app/core/constants/feature.constants';
import { slug } from 'src/app/core/constants/queryparam.constants';

const menuRoutes: Routes = [
  {
    path: `${articlesFeatureKey}`,
    loadChildren: () => import('src/app/features/article/admin/overview/article-admin-overview.module')
      .then((imported) => imported.ArticleAdminOverviewModule),
    data: { label: 'overview' },
  },
  {
    path: `${articlesFeatureKey}/dashboard`,
    loadChildren: () => import('src/app/features/article/portal/details/article-portal-details.module')
      .then((imported) => imported.ArticlePortalDetailsModule),
    data: { label: 'dashboard' },
  },
  {
    path: `${articlesFeatureKey}/form`,
    loadChildren: () => import('src/app/features/article/admin/form/article-admin-form.module')
      .then((imported) => imported.ArticleAdminFormModule),
    data: { label: 'form' },
  },
];

const routes: Routes = [
  {
    path: `${articlesFeatureKey}/:${slug}/edit`,
    loadChildren: () => import('src/app/features/article/admin/form/article-admin-form.module')
      .then((imported) => imported.ArticleAdminFormModule),
  },
]

@NgModule({
  imports: [RouterModule.forChild([
    ...menuRoutes,
    ...routes,
  ])],
  exports: [RouterModule]
})
export class ArticleAdminRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addMainRoutes({
      code: articlesFeatureKey,
      routes: menuRoutes,
    }));
  }
}

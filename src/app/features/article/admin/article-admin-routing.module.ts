import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { articlesFeatureKey } from 'src/app/core/constants/feature.constants';
import { id, slug } from 'src/app/core/constants/queryparam.constants';
import { ArticleAdminDetailsLayoutComponent } from './details/modules/layout/components/article-admin-details-layout.component';

const menuRoutes: Routes = [
  // {
  //   path: `${articlesFeatureKey}/dashboard`,
  //   loadChildren: () => import('src/app/features/article/portal/details/article-portal-details.module')
  //     .then((imported) => imported.ArticlePortalDetailsModule),
  //   data: { label: 'dashboard' },
  // },
  {
    path: `${articlesFeatureKey}`,
    loadChildren: () => import('src/app/features/article/admin/overview/article-admin-overview.module')
      .then((imported) => imported.ArticleAdminOverviewModule),
    data: { label: 'overview' },
  },
  {
    path: `${articlesFeatureKey}/category`,
    loadChildren: () => import('src/app/features/article/admin/category/article-admin-category.module')
      .then((imported) => imported.ArticleAdminCategoryModule),
    data: { label: 'categories' },
  },
];

const routes: Routes = [
  {
    path: `${articlesFeatureKey}/form`,
    loadChildren: () => import('src/app/features/article/admin/form/article-admin-form.module')
      .then((imported) => imported.ArticleAdminFormModule),
  },
  {
    path: `${articlesFeatureKey}/category/form`,
    loadChildren: () => import('src/app/features/article/admin/category-form/article-admin-category-form.module')
      .then((imported) => imported.ArticleAdminCategoryFormModule),
  },
  {
    path: `${articlesFeatureKey}/category/:${id}/form`,
    loadChildren: () => import('src/app/features/article/admin/category-form/article-admin-category-form.module')
      .then((imported) => imported.ArticleAdminCategoryFormModule),
  },
  {
    path: `${articlesFeatureKey}/:${slug}/form`,
    loadChildren: () => import('src/app/features/article/admin/form/article-admin-form.module')
    .then((imported) => imported.ArticleAdminFormModule),
  },
  {
    path: `${articlesFeatureKey}/:${slug}`,
    loadChildren: () => import('src/app/features/article/admin/details/article-admin-details.module')
      .then((imported) => imported.ArticleAdminDetailsModule),
    component: ArticleAdminDetailsLayoutComponent
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

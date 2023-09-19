import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { guestArticlesFeatureKey } from 'src/app/core/constants/feature.constants';

const menuRoutes: Routes = [
  {
    path: `${guestArticlesFeatureKey}`,
    loadChildren: () => import('src/app/features/guest-article/admin/overview/guest-article-admin-overview.module')
      .then((imported) => imported.GuestArticleAdminOverviewModule),
    data: { label: 'overview' },
  },
  {
    path: `${guestArticlesFeatureKey}/publicAuthors`,
    loadChildren: () => import('src/app/features/guest-article/admin/public-author/guest-article-admin-authors.module')
      .then((imported) => imported.GuestArticleAdminPublicAuthorsModule),
    data: { label: 'publicAuthors' },
  },
];

const routes: Routes = [
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

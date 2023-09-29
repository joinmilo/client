import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { mediaFeatureKey } from 'src/app/core/constants/feature.constants';
import { id } from 'src/app/core/constants/queryparam.constants';

const menuRoutes: Routes = [
  // {
  //   path: `${mediaFeatureKey}/dashboard`,
  //   loadChildren: () => import('src/app/features/media/portal/overview/portal-media-overview.module')
  //     .then((imported) => imported.PortalMediaOverviewModule),
  //   data: { label: 'dashboard' },
  // },
  {
    path: `${mediaFeatureKey}`,
    loadChildren: () => import('src/app/features/media/admin/overview/media-admin-overview.module')
      .then((imported) => imported.MediaAdminOverviewModule),
    data: { label: 'overview' },
  },
  {
    path: `${mediaFeatureKey}/category`,
    loadChildren: () => import('src/app/features/media/admin/category/media-admin-category.module')
      .then((imported) => imported.MediaAdminCategoryModule),
    data: { label: 'categories' },
  },
];

const routes: Routes = [
  {
  path: `${mediaFeatureKey}/category/form`,
    loadChildren: () => import('src/app/features/media/admin/category-form/media-admin-category-form.module')
      .then((imported) => imported.MediaAdminCategoryFormModule),
  },
  {
  path: `${mediaFeatureKey}/category/:${id}/form`,
    loadChildren: () => import('src/app/features/media/admin/category-form/media-admin-category-form.module')
      .then((imported) => imported.MediaAdminCategoryFormModule),
  },
]

@NgModule({
  imports: [RouterModule.forChild([
    ...menuRoutes,
    ...routes,
  ])],
  exports: [RouterModule]
})
export class MediaAdminRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addMainRoutes({
      code: mediaFeatureKey,
      routes: menuRoutes,
    }));
  }
}

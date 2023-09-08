import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { surveysFeatureKey } from 'src/app/core/constants/feature.constants';

const menuRoutes: Routes = [
  {
    path: `${surveysFeatureKey}`,
    loadChildren: () => import('src/app/features/survey/admin/overview/survey-admin-overview.module')
      .then((imported) => imported.SurveyAdminOverviewModule),
    data: { label: 'overview' },
  },
  {
    path: `${surveysFeatureKey}/dashboard`,
    loadChildren: () => import('src/app/features/survey/portal/details/portal-survey-details.module')
      .then((imported) => imported.PortalSurveyDetailsModule),
    data: { label: 'dashboard' },
  },
  {
    path: `${surveysFeatureKey}/form`,
    loadChildren: () => import('src/app/features/survey/admin/form/survey-admin-form.module')
      .then((imported) => imported.SurveyAdminFormModule),
    data: { label: 'form' },
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
export class SurveyAdminRoutingModule {

  constructor(
    public store: Store
  ) {
    this.store.dispatch(AdminActions.addMainRoutes({
      code: surveysFeatureKey,
      routes: menuRoutes,
    }));
  }
}

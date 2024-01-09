import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { contestsFeatureKey } from 'src/app/core/constants/feature.constants';
import { slug } from 'src/app/core/constants/queryparam.constants';

const routes: Routes = [
  {
    path: contestsFeatureKey,
    loadChildren: () => import('src/app/features/contest/portal/overview/portal-contest-overview.module')
      .then((imported) => imported.PortalContestOverviewModule),
  },
  {
    path: `${contestsFeatureKey}/:${slug}`,
    loadChildren: () => import('src/app/features/contest/portal/details/contest-portal-details.module')
      .then((imported) => imported.PortalContestDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContestPortalRoutingModule { }

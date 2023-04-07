import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { articlesFeatureKey, calendarFeatureKey, eventsFeatureKey, reportFeatureKey } from './common/constants/common.constants';
import { PortalNotFoundComponent } from './common/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: articlesFeatureKey,
    loadChildren: () => import('./features/article/main/article.module')
      .then((imported) => imported.PortalArticleModule),
  },
  {
    path: eventsFeatureKey,
    loadChildren: () => import('./features/event/event.module')
      .then((imported) => imported.EventPortalModule),
  },
  {
    path: calendarFeatureKey,
    loadChildren: () => import('./features/calendar/main/calendar.module')
      .then((imported) => imported.CalendarPortalModule),
  },
  {
    path: reportFeatureKey,
    loadChildren: () => import('./features/report/report.module')
      .then((imported) => imported.ReportPortalModule),
  },

  {
    path: '404',
    component: PortalNotFoundComponent,
  },
  {
    path: '',
    loadChildren: () => import('./page/page.module')
      .then((imported) => imported.PortalPageModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }

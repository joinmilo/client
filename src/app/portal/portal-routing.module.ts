import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { articlesFeatureKey, authorFeatureKey, calendarFeatureKey, eventsFeatureKey, guestArticlesFeatureKey, reportFeatureKey } from '../core/constants/core.constants';

const routes: Routes = [
  {
    path: authorFeatureKey,
    loadChildren: () => import('./features/author/details/portal-author-details.module')
      .then((imported) => imported.PortalAuthorDetailsModule),
  },
  {
    path: articlesFeatureKey,
    loadChildren: () => import('./features/article/main/portal-article.module')
      .then((imported) => imported.PortalArticleModule),
  },
  {
    path: eventsFeatureKey,
    loadChildren: () => import('./features/event/overview/portal-event-overview.module')
      .then((imported) => imported.PortalEventOverviewModule),
  },
  {
    path: calendarFeatureKey,
    loadChildren: () => import('./features/calendar/main/portal-calendar.module')
      .then((imported) => imported.PortalCalendarModule),
  },
  {
    path: guestArticlesFeatureKey,
    loadChildren: () => import('./features/guest-article/portal-guest-article.module')
      .then((imported) => imported.PortalGuestArticleModule),
  },
  {
    path: reportFeatureKey,
    loadChildren: () => import('./features/report/main/portal-report.module')
      .then((imported) => imported.PortalReportModule),
  },
  {
    path: 'search',
    loadChildren: () => import('./shared/search/search.module')
      .then((imported) => imported.PortalSearchModule),
  },
  {
    path: '404',
    loadChildren: () => import('../shared/not-found/not-found.module')
      .then((imported) => imported.NotFoundModule),
  },
  {
    path: '',
    loadChildren: () => import('./main/portal-main.module')
      .then((imported) => imported.PortalMainModule),
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

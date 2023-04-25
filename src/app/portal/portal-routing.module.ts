import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { articlesFeatureKey, authorFeatureKey, calendarFeatureKey, eventsFeatureKey, guestArticlesFeatureKey, reportFeatureKey } from './common/constants/common.constants';

const routes: Routes = [
  {
    path: authorFeatureKey,
    loadChildren: () => import('./features/author/main/author.module')
      .then((imported) => imported.AuthorPortalModule),
  },
  {
    path: articlesFeatureKey,
    loadChildren: () => import('./features/article/main/article.module')
      .then((imported) => imported.PortalArticleModule),
  },
  {
    path: eventsFeatureKey,
    loadChildren: () => import('./features/event/overview/event-overview.module')
      .then((imported) => imported.PortalEventOverviewModule),
  },
  {
    path: calendarFeatureKey,
    loadChildren: () => import('./features/calendar/main/calendar.module')
      .then((imported) => imported.PortalCalendarModule),
  },
  {
    path: guestArticlesFeatureKey,
    loadChildren: () => import('./features/guest-article/guest-article.module')
      .then((imported) => imported.PortalGuestArticleModule),
  },
  {
    path: reportFeatureKey,
    loadChildren: () => import('./features/report/main/report.module')
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { articlesFeatureKey, authorsFeatureKey, calendarFeatureKey, dealsFeatureKey, eventsFeatureKey, guestArticlesFeatureKey, organisationsFeatureKey, reportsFeatureKey, slug, surveysFeatureKey } from '../core/constants/core.constants';

const routes: Routes = [
  {
    path: articlesFeatureKey,
    loadChildren: () => import('./features/article/overview/portal-article-overview.module')
      .then((imported) => imported.PortalArticleOverviewModule),
  },
  {
    path: authorsFeatureKey,
    loadChildren: () =>
      import('./features/author/overview/portal-author-overview.module').then(
        (imported) => imported.PortalAuthorOverviewModule
      ),
  },
  {
    path: `${authorsFeatureKey}/:${slug}`,
    loadChildren: () => import('./features/author/details/portal-author-details.module')
      .then((imported) => imported.PortalAuthorDetailsModule),
  },
  {
    path: calendarFeatureKey,
    loadChildren: () =>
      import('./features/calendar/main/portal-calendar.module').then(
        (imported) => imported.PortalCalendarModule
      ),
  },
  {
    path: dealsFeatureKey,
    loadChildren: () => import('./features/deal/overview/portal-deal-overview.module')
      .then((imported) => imported.PortalDealOverviewModule),
  },
  {
    path: eventsFeatureKey,
    loadChildren: () => import('./features/event/overview/portal-event-overview.module')
      .then((imported) => imported.PortalEventOverviewModule),
  },
  {
    path: `${eventsFeatureKey}/:${slug}`,
    loadChildren: () => import('./features/event/details/portal-event-details.module')
      .then((imported) => imported.PortalEventDetailsModule),
  },
  {
    path: guestArticlesFeatureKey,
    loadChildren: () =>
      import('./features/guest-article/portal-guest-article.module').then(
        (imported) => imported.PortalGuestArticleModule
      ),
  },
  {
    path: 'notifications',
    loadChildren: () => import('../shared/notification/notification.module')
      .then((imported) => imported.NotificationModule),
  },
  {
    path: organisationsFeatureKey,
    loadChildren: () => import('./features/organisation/overview/portal-organisation-overview.module')
      .then((imported) => imported.PortalOrganisationOverviewModule),
  },
  {
    path: reportsFeatureKey,
    loadChildren: () => import('./features/report/main/portal-report.module')
      .then((imported) => imported.PortalReportModule),
  },
  {
    path: surveysFeatureKey,
    loadChildren: () => import('./features/survey/overview/portal-survey-overview.module')
      .then((imported) => imported.PortalSurveyOverviewModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./shared/search/search.module').then(
        (imported) => imported.PortalSearchModule
      ),
  },
  {
    path: '404',
    loadChildren: () =>
      import('../shared/not-found/not-found.module').then(
        (imported) => imported.NotFoundModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./main/portal-main.module').then(
        (imported) => imported.PortalMainModule
      ),
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

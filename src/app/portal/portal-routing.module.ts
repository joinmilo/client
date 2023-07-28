import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { articlesFeatureKey, authorsFeatureKey, calendarFeatureKey, contestsFeatureKey, dealsFeatureKey, eventsFeatureKey, guestArticlesFeatureKey, mapFeatureKey, mediaFeatureKey, organisationsFeatureKey, reportsFeatureKey, slug, surveysFeatureKey } from '../core/constants/core.constants';
import { PortalLandingComponent } from './modules/landing/component/portal-landing.component';

const routes: Routes = [
  {
    path: articlesFeatureKey,
    loadChildren: () => import('./features/article/overview/portal-article-overview.module')
      .then((imported) => imported.PortalArticleOverviewModule),
  },
  {
    path: `${articlesFeatureKey}/:${slug}`,
    loadChildren: () => import('./features/article/details/portal-article-details.module')
      .then((imported) => imported.PortalArticleDetailsModule),
  },
  {
    path: authorsFeatureKey,
    loadChildren: () => import('./features/author/overview/portal-author-overview.module')
      .then((imported) => imported.PortalAuthorOverviewModule),
  },
  {
    path: `${authorsFeatureKey}/:${slug}`,
    loadChildren: () => import('./features/author/details/portal-author-details.module')
      .then((imported) => imported.PortalAuthorDetailsModule),
  },
  {
    path: calendarFeatureKey,
    loadChildren: () => import('./features/calendar/main/portal-calendar.module')
      .then((imported) => imported.PortalCalendarModule),
  },
  {
    path: contestsFeatureKey,
    loadChildren: () => import('./features/contest/overview/portal-contest-overview.module')
      .then((imported) => imported.PortalContestOverviewModule),
  },
  {
    path: `${contestsFeatureKey}/:${slug}`,
    loadChildren: () => import('./features/contest/details/portal-contest-details.module')
      .then((imported) => imported.PortalContestDetailsModule),
  },
  {
    path: dealsFeatureKey,
    loadChildren: () => import('./features/deal/overview/portal-deal-overview.module')
      .then((imported) => imported.PortalDealOverviewModule),
  },
  {
    path: `${dealsFeatureKey}/:${slug}`,
    loadChildren: () => import('./features/deal/details/portal-deal-details.module')
      .then((imported) => imported.PortalDealDetailsModule),
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
    loadChildren: () => import('./features/guest-article/main/portal-guest-article.module')
        .then((imported) => imported.PortalGuestArticleModule),
  },
  {
    path: mapFeatureKey,
    loadChildren: () => import('./features/map/overview/portal-map-overview.module')
      .then((imported) => imported.PortalMapOverviewModule),
  },
  {
    path: mediaFeatureKey,
    loadChildren: () => import('./features/media/overview/portal-media-overview.module')
      .then((imported) => imported.PortalMediaOverviewModule),
  },
  {
    path: 'notifications',
    loadChildren: () => import('../shared/pages/notification/notification.module')
      .then((imported) => imported.NotificationModule),
  },
  {
    path: organisationsFeatureKey,
    loadChildren: () => import('./features/organisation/overview/portal-organisation-overview.module')
      .then((imported) => imported.PortalOrganisationOverviewModule),
  },
  {
    path: `${organisationsFeatureKey}/:${slug}`,
    loadChildren: () => import('./features/organisation/details/portal-organisation-details.module')
      .then((imported) => imported.PortalOrganisationDetailsModule),
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
    path: `${surveysFeatureKey}/:${slug}`,
    loadChildren: () => import('./features/survey/details/portal-survey-details.module')
      .then((imported) => imported.PortalSurveyDetailsModule),
  },
  {
    path: 'search',
    loadChildren: () => import('../shared/pages/search/search.module')
      .then((imported) => imported.PortalSearchModule),
  },
  {
    path: '404',
    loadChildren: () => import('../shared/pages/not-found/not-found.module')
      .then((imported) => imported.NotFoundModule),
  },
  {
    path: `:${slug}`,
    loadChildren: () => import('./modules/page/portal-page.module')
      .then((imported) => imported.PortalPageModule),
  },
  {
    path: '',
    loadChildren: () => import('./modules/landing/portal-landing.module')
      .then((imported) => imported.PortalLandingModule),
    component: PortalLandingComponent
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

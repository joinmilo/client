import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticlePortalRoutingModule } from '../features/article/portal/article-portal-routing.module';
import { AuthorPortalRoutingModule } from '../features/author/portal/author-portal-routing.module';
import { CalendarPortalRoutingModule } from '../features/calendar/portal/calendar-portal-routing.module';
import { ContestPortalRoutingModule } from '../features/contest/portal/contest-portal-routing.module';
import { DealPortalRoutingModule } from '../features/deal/portal/deal-portal-routing.module';
import { EventPortalRoutingModule } from '../features/event/portal/event-portal-routing.module';
import { GuestArticlePortalRoutingModule } from '../features/guest-article/portal/guest-article-portal-routing.module';
import { MapPortalRoutingModule } from '../features/map/portal/map-portal-routing.module';
import { MediaPortalRoutingModule } from '../features/media/portal/media-portal-routing.module';
import { NavigatorPortalRoutingModule } from '../features/navigator/portal/navigator-portal-routing.module';
import { OrganisationPortalRoutingModule } from '../features/organisation/portal/organisation-portal-routing.module';
import { ReportPortalRoutingModule } from '../features/report/portal/report-portal-routing.module';
import { SurveyPortalRoutingModule } from '../features/survey/portal/survey-portal-routing.module';
import { portalStateKey } from './constants/portal.constants';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalEffects } from './state/portal.effects';
import { portalReducer } from './state/portal.reducer';

const framework = [
  CommonModule,

  //TODO: Remove once Angular fixes lazy load error:
  MatDialogModule,
  MatNativeDateModule,
  MatSelectModule,
];

const routes = [
  ArticlePortalRoutingModule,
  AuthorPortalRoutingModule,
  CalendarPortalRoutingModule,
  ContestPortalRoutingModule,
  DealPortalRoutingModule,
  EventPortalRoutingModule,
  GuestArticlePortalRoutingModule,
  MapPortalRoutingModule,
  MediaPortalRoutingModule,
  NavigatorPortalRoutingModule,
  OrganisationPortalRoutingModule,
  ReportPortalRoutingModule,
  SurveyPortalRoutingModule,
  PortalRoutingModule, //TODO: always last entry duet to order and redirect to 404, Remove 404 and put in AppRouter
]

const libs = [
  StoreModule.forFeature(portalStateKey, portalReducer),
  EffectsModule.forFeature([PortalEffects]),
]

@NgModule({
  imports: [
    ...framework,
    ...libs,
    ...routes,
  ],
})
export class PortalModule { }

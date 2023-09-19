import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleAdminRoutingModule } from '../features/article/admin/article-admin-routing.module';
import { AuthorAdminRoutingModule } from '../features/author/admin/author-admin-routing.module';
import { ContestAdminRoutingModule } from '../features/contest/admin/contest-admin-routing.module';
import { DealAdminRoutingModule } from '../features/deal/admin/deal-admin-routing.module';
import { EventAdminRoutingModule } from '../features/event/admin/event-admin-routing.module';
import { GuestArticleAdminRoutingModule } from '../features/guest-article/admin/guest-article-admin-routing.module';
import { MediaAdminRoutingModule } from '../features/media/admin/media-admin-routing.module';
import { OrganisationAdminRoutingModule } from '../features/organisation/admin/organisation-admin-routing.module';
import { ReportAdminRoutingModule } from '../features/report/admin/report-admin-routing.module';
import { SurveyAdminRoutingModule } from '../features/survey/admin/survey-admin-routing.module';
import { AdminRoutingModule } from './admin-routing.module';
import { adminStateKey } from './constants/admin.constants';
import { AdminEffects } from './state/admin.effects';
import { adminReducer } from './state/admin.reducer';

const framework = [
  CommonModule,
  RouterModule,
];

const routes = [
  EventAdminRoutingModule,
  ArticleAdminRoutingModule,
  OrganisationAdminRoutingModule,
  ContestAdminRoutingModule,
  SurveyAdminRoutingModule,
  MediaAdminRoutingModule,
  DealAdminRoutingModule,
  ReportAdminRoutingModule,
  GuestArticleAdminRoutingModule,
  AuthorAdminRoutingModule,
  AdminRoutingModule, //TODO: always last entry duet to order and redirect to 404, Remove 404 and put in AppRouter
]

const libs = [
  StoreModule.forFeature(adminStateKey, adminReducer),
  EffectsModule.forFeature([AdminEffects]),
];

@NgModule({
  imports: [
    ...framework,
    ...libs,
    ...routes,
  ],
})
export class AdminModule { }

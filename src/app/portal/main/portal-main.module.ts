import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { MediaModule } from 'src/app/shared/media/media.module';
import { PortalArticlePageFeatureModule } from '../features/article/page-feature/portal-article-page-feature.module';
import { PortalAuthorPageFeatureModule } from '../features/author/page-feature/portal-author-page-feature.module';
import { PortalCalendarPageFeatureModule } from '../features/calendar/page-feature/portal-calendar-page-feature.module';
import { PortalContestPageFeatureModule } from '../features/contest/page-feature/portal-contest-page-feature.module';
import { PortalDealPageFeatureModule } from '../features/deal/page-feature/portal-deal-page-feature.module';
import { PortalEventPageFeatureModule } from '../features/event/page-feature/portal-event-page-feature.module';
import { PortalFormPageFeatureModule } from '../features/form/page-feature/portal-form-page-feature.module';
import { PortalGuestArticlePageFeatureModule } from '../features/guest-article/page-feature/guest-portal-article-page-feature.module';
import { PortalMapPageFeatureModule } from '../features/map/page-feature/portal-map-page-feature.module';
import { PortalOrganisationPageFeatureModule } from '../features/organisation/page-feature/portal-organisation-page-feature.module';
import { PortalReportPageFeatureModule } from '../features/report/page-feature/portal-report-page-feature.module';
import { PortalSurveyPageFeatureModule } from '../features/survey/page-feature/portal-survey-page-feature.module';
import { PortalPageFeaturesComponent } from './components/features/portal-page-features.component';
import { PortalLandingComponent } from './components/landing/portal-landing.component';
import { PortalPageComponent } from './components/page/portal-page.component';
import { portalMainStateKey } from './constants/portal-main.constants';
import { PortalMainRoutingModule } from './portal-main-routing.module';
import { PortalMainEffects } from './state/portal-main.effects';
import { portalMainReducer } from './state/portal-main.reducer';

const components = [
  PortalLandingComponent,
  PortalPageComponent,
  PortalPageFeaturesComponent,
];

const features = [
  PortalArticlePageFeatureModule,
  PortalAuthorPageFeatureModule,
  PortalCalendarPageFeatureModule,
  PortalContestPageFeatureModule,
  PortalDealPageFeatureModule,
  PortalEventPageFeatureModule,
  PortalFormPageFeatureModule,
  PortalGuestArticlePageFeatureModule,
  PortalMapPageFeatureModule,
  PortalOrganisationPageFeatureModule,
  PortalReportPageFeatureModule,
  PortalSurveyPageFeatureModule,
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatProgressBarModule,
  MatToolbarModule,
];

const modules = [
  CoreModule,
  PortalMainRoutingModule,
  MediaModule
];

const libs = [
  StoreModule.forFeature(portalMainStateKey, portalMainReducer),
  EffectsModule.forFeature([PortalMainEffects]),
]

@NgModule({
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
  imports: [
    ...features,
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
})
export class PortalMainModule { }

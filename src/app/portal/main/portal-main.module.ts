import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleImageComponent } from 'src/app/shared/image/title/title-image.component';
import { MediaModule } from 'src/app/shared/media/media.module';
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
  // PortalArticlePageFeatureModule,
  // PortalAuthorPageFeatureModule,
  // PortalCalendarPageFeatureModule,
  // PortalContestPageFeatureModule,
  // PortalDealPageFeatureModule,
  // PortalEventPageFeatureModule,
  // PortalFormPageFeatureModule,
  // PortalGuestArticlePageFeatureModule,
  // PortalMapPageFeatureModule,
  // PortalOrganisationPageFeatureModule,
  // PortalReportPageFeatureModule,
  // PortalSurveyPageFeatureModule,
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
  MediaModule,
  PortalMainRoutingModule,
  TitleImageComponent,
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
    // ...features,
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
})
export class PortalMainModule { }

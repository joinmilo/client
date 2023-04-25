import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { PortalArticlePageFeatureModule } from '../features/article/page-feature/article-page-feature.module';
import { PortalCalendarPageFeatureModule } from '../features/calendar/page-feature/calendar-page-feature.module';
import { PortalEventPageFeatureModule } from '../features/event/page-feature/event-page-feature.module';
import { PortalReportPageFeatureModule } from '../features/report/page-feature/report-page-feature.module';
import { PageFeaturesComponent } from './components/features/page-features.component';
import { PageLandingComponent } from './components/landing/page-landing.component';
import { PageComponent } from './components/page/page.component';
import { pageStateKey } from './constants/page.constants';
import { PortalPageRoutingModule } from './page-routing.module';
import { PageEffects } from './state/page.effects';
import { pageReducer } from './state/page.reducer';

const components = [
  PageFeaturesComponent
];

const pages = [
  PageComponent,
  PageLandingComponent,
];

const features = [
  PortalArticlePageFeatureModule,
  PortalCalendarPageFeatureModule,
  PortalEventPageFeatureModule,
  PortalReportPageFeatureModule,
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
  PortalPageRoutingModule,
];

const libs = [
  StoreModule.forFeature(pageStateKey, pageReducer),
  EffectsModule.forFeature([PageEffects]),
]

@NgModule({
  declarations: [
    ...components,
    ...pages
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
export class PortalPageModule { }

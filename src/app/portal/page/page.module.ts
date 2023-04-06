import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { PortalCommonModule } from '../common/common.module';
import { EventPortalPageFeatureModule } from '../features/event/page-feature/event-page-feature.module';
import { PageFeaturesComponent } from './components/features/page-features.component';
import { pageStateKey } from './constants/page.constants';
import { PagePortalRoutingModule as PortalPageRoutingModule } from './page-routing.module';
import { PageLandingComponent } from './pages/landing/page-landing.component';
import { PageComponent } from './pages/page/page.component';
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
  EventPortalPageFeatureModule,
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatToolbarModule,
];

const modules = [
  CoreModule,
  PortalCommonModule,
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

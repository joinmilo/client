import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { PortalCommonModule } from '../../common/common.module';
import { PageFeaturesComponent } from './components/features/page-features.component';
import { pageFeatureKey } from './constants/page.constants';
import { PagePortalRoutingModule } from './page-routing.module';
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

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatToolbarModule,
];

const modules = [
  CoreModule,
  PagePortalRoutingModule,
  PortalCommonModule,
];

const libs = [
  StoreModule.forFeature(pageFeatureKey, pageReducer),
  EffectsModule.forFeature([PageEffects]),
]

@NgModule({
  declarations: [
    ...components,
    ...pages
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [
    ...components,
  ]
})
export class PagePortalModule { }

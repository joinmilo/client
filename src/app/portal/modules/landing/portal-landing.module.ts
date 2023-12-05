import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { PortalPageEmbeddingComponent } from '../page-embedding/portal-page-embedding.component';
import { PortalLandingComponent } from './component/portal-landing.component';
import { portalLandingStateKey } from './constants/portal-landing.constants';
import { PortalLandingEffects } from './state/portal-landing.effects';
import { portalLandingReducer } from './state/portal-landing.reducer';

const components = [
  PortalLandingComponent,
];

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatButtonModule,
];

const modules = [
  CoreModule,
  PortalPageEmbeddingComponent,
];

const libs = [
  StoreModule.forFeature(portalLandingStateKey, portalLandingReducer),
  EffectsModule.forFeature([PortalLandingEffects]),
]

@NgModule({
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
})
export class PortalLandingModule { }

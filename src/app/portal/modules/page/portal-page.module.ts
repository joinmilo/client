import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { PortalPageEmbeddingModule } from '../embedding/portal-page-embedding.module';
import { PortalPageComponent } from './components/portal-page.component';
import { portalPageStateKey } from './constants/portal-page.constants';
import { PortalPageRoutingModule } from './portal-page-routing.module';
import { PortalPageEffects } from './state/portal-page.effects';
import { portalPageReducer } from './state/portal-page.reducer';

const components = [
  PortalPageComponent,
];

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
  PortalPageEmbeddingModule,
  PortalPageRoutingModule,
];

const libs = [
  StoreModule.forFeature(portalPageStateKey, portalPageReducer),
  EffectsModule.forFeature([PortalPageEffects]),
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
export class PortalPageModule { }

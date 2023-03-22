/* eslint-disable  @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
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

const components: Type<any>[] = [
  PageFeaturesComponent
];

const pages: Type<any>[] = [
  PageComponent,
  PageLandingComponent,
];

const framework: any[] = [
  CommonModule,
  StoreModule.forFeature(pageFeatureKey, pageReducer),
  EffectsModule.forFeature([PageEffects]),
];

const materials: Type<any>[] = [
  MatButtonModule,
  MatToolbarModule,
];

const modules: Type<any>[] = [
  CoreModule,
  PagePortalRoutingModule,
  PortalCommonModule,
];

@NgModule({
  declarations: [
    ...components,
    ...pages
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
  ],
  exports: [
    ...components,
  ]
})
export class PagePortalModule { }

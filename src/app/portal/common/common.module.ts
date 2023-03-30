import { MatButtonModule } from '@angular/material/button';
import { PortalFooterComponent } from './components/footer/portal-footer.component';
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { PortalHeaderComponent } from './components/header/portal-header.component';
import { PortalMenuComponent } from './components/menu/portal-menu.component';
import { commonFeatureKey } from './constants/common.constants';
import { PortalNotFoundComponent } from './pages/not-found/not-found.component';
import { CommonEffects } from './state/common.effects';
import { commonReducer } from './state/common.reducer';

const components: Type<any>[] = [
  PortalFooterComponent,
  PortalHeaderComponent,
  PortalMenuComponent,
];

const pages: Type<any>[] = [
  PortalNotFoundComponent,
];

const framework: Type<any>[] = [
  CommonModule,
  RouterModule,
  MatMenuModule
];

const materials: Type<any>[] = [
  FontAwesomeModule,
  MatButtonModule,
  MatToolbarModule,
];

const modules: Type<any>[] = [
  CoreModule,
];

@NgModule({
  declarations: [
    ...components,
    ...pages,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    StoreModule.forFeature(commonFeatureKey, commonReducer),
    EffectsModule.forFeature([CommonEffects]),
  ],
  exports: [
    ...components,
  ],
})
export class PortalCommonModule { }

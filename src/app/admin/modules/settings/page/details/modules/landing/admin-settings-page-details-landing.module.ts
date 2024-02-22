import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { DetailsTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { AdminSettingsPageDetailsLandingComponent } from './components/admin-settings-page-details-landing.component';
import { adminSettingsPageDetailsLandingStateKey } from './constants/admin-settings-page-details-landing.constants';
import { AdminSettingsPageDetailsLandingEffects } from './state/admin-settings-page-details-landing.effects';
import { adminSettingsPageDetailsLandingReducer } from './state/admin-settings-page-details-landing.reducer';

const components = [
  AdminSettingsPageDetailsLandingComponent,
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
];

const modules = [
  CoreModule
];

const libs = [
  StoreModule.forFeature(adminSettingsPageDetailsLandingStateKey, adminSettingsPageDetailsLandingReducer),
  EffectsModule.forFeature([AdminSettingsPageDetailsLandingEffects]),

  DetailsTitleComponent,
  TranslatablePipe,
  I18nDirective,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...libs,
    ...materials,
    ...modules,
  ],
  exports: [...components],
})
export class AdminSettingsPageDetailsLandingModule { }

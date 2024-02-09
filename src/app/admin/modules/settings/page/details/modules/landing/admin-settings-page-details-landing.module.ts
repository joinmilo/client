import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
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
  CoreModule,
  MediaWidgetsModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsPageDetailsLandingStateKey, adminSettingsPageDetailsLandingReducer),
  EffectsModule.forFeature([AdminSettingsPageDetailsLandingEffects]),
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

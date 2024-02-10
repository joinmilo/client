import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RadioCardGroupComponent } from 'ngx-cinlib/forms/radio-card';
import { IconComponent } from 'ngx-cinlib/icons';
import { DetailsTitleComponent, PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { AdminSettingsPageDetailsLayoutComponent } from './components/admin-settings-page-details-layout.component';
import { adminSettingsPageDetailsLayoutStateKey } from './constants/admin-settings-page-details-layout.constants';
import { AdminSettingsPageDetailsLayoutEffects } from './state/admin-settings-page-details-layout.effects';
import { adminSettingsPageDetailsLayoutReducer } from './state/admin-settings-page-details-layout.reducer';

const components = [
  AdminSettingsPageDetailsLayoutComponent,
]

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
];

const modules = [
  CoreModule,
  TableModule,
];

const libs = [
  StoreModule.forFeature(adminSettingsPageDetailsLayoutStateKey, adminSettingsPageDetailsLayoutReducer),
  EffectsModule.forFeature([AdminSettingsPageDetailsLayoutEffects]),

  DetailsTitleComponent,
  IconComponent,
  PageTitleComponent,
  RadioCardGroupComponent,
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
export class AdminSettingsPageDetailsLayoutModule { }

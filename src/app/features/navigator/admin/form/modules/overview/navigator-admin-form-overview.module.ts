import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatTreeModule } from '@angular/material/tree';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslatablePipe } from 'ngx-cinlib/i18n';
import { IconComponent } from 'ngx-cinlib/icons';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { NavigatorAdminFormOverviewComponent } from './components/navigator-admin-form-overview.component';
import { navigatorAdminFormOverviewStateKey } from './constants/navigator-admin-form-overview.constants';
import { NavigatorAdminFormOverviewEffects } from './state/navigator-admin-form-overview.effects';
import { navigatorAdminFormOverviewReducer } from './state/navigator-admin-form-overview.reducer';

const components = [
  NavigatorAdminFormOverviewComponent,
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatTreeModule,
  MatProgressBar
];

const modules = [
  CoreModule,
];

const libs = [
  StoreModule.forFeature(navigatorAdminFormOverviewStateKey, navigatorAdminFormOverviewReducer),
  EffectsModule.forFeature([NavigatorAdminFormOverviewEffects]),
  IconComponent,
  TableComponent,
  TranslatablePipe,
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
export class NavigatorAdminFormOverviewModule { }

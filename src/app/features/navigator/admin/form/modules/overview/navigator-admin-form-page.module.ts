import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { NavigatorAdminFormOverviewComponent } from './components/navigator-admin-form-page.component';
import { navigatorAdminFormOverviewStateKey } from './constants/navigator-admin-form-overview.constants';
import { NavigatorAdminFormOverviewEffects } from './state/navigator-admin-form-page.effects';
import { navigatorAdminFormOverviewReducer } from './state/navigator-admin-form-page.reducer';

const components = [
  NavigatorAdminFormOverviewComponent,
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  CoreModule,
];

const libs = [
  StoreModule.forFeature(navigatorAdminFormOverviewStateKey, navigatorAdminFormOverviewReducer),
  EffectsModule.forFeature([NavigatorAdminFormOverviewEffects]),

  TableComponent,
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

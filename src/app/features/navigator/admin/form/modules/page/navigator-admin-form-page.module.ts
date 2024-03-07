import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { NavigatorAdminFormPageComponent } from './components/navigator-admin-form-page.component';
import { navigatorAdminFormPageStateKey } from './constants/navigator-admin-form-page.constants';
import { NavigatorAdminFormPageEffects } from './state/navigator-admin-form-page.effects';
import { navigatorAdminFormPageReducer } from './state/navigator-admin-form-page.reducer';

const components = [
  NavigatorAdminFormPageComponent,
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
  StoreModule.forFeature(navigatorAdminFormPageStateKey, navigatorAdminFormPageReducer),
  EffectsModule.forFeature([NavigatorAdminFormPageEffects]),

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
export class NavigatorAdminFormPageModule { }

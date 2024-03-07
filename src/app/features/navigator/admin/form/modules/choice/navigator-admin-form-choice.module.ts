import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { NavigatorAdminFormChoiceComponent } from './components/navigator-admin-form-choice.component';
import { navigatorAdminFormChoiceStateKey } from './constants/navigator-admin-form-choice.constants';
import { NavigatorAdminFormChoiceEffects } from './state/navigator-admin-form-choice.effects';
import { navigatorAdminFormChoiceReducer } from './state/navigator-admin-form-choice.reducer';

const components = [
  NavigatorAdminFormChoiceComponent,
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
  StoreModule.forFeature(navigatorAdminFormChoiceStateKey, navigatorAdminFormChoiceReducer),
  EffectsModule.forFeature([NavigatorAdminFormChoiceEffects]),

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
export class NavigatorAdminFormChoiceModule { }

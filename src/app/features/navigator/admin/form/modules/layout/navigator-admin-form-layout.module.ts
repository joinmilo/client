import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TableComponent } from 'ngx-cinlib/tables';
import { CoreModule } from 'src/app/core/core.module';
import { NavigatorAdminFormLayoutComponent } from './components/navigator-admin-form-layout.component';
import { navigatorAdminFormLayoutStateKey } from './constants/navigator-admin-form-layout.constants';
import { NavigatorAdminFormLayoutEffects } from './state/navigator-admin-form-layout.effects';
import { navigatorAdminFormLayoutReducer } from './state/navigator-admin-form-layout.reducer';

const components = [
  NavigatorAdminFormLayoutComponent,
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
  StoreModule.forFeature(navigatorAdminFormLayoutStateKey, navigatorAdminFormLayoutReducer),
  EffectsModule.forFeature([NavigatorAdminFormLayoutEffects]),

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
export class NavigatorAdminFormLayoutModule { }

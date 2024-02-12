import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { CoreModule } from 'src/app/core/core.module';
import { SuburbFilterComponent } from './component/suburb-filter.component';
import { suburbFilterStateKey } from './constants/suburb-filter.constants';
import { SuburbFilterEffects } from './state/suburb-filter.effects';
import { suburbFilterReducer } from './state/suburb-filter.reducer';

const components = [
  SuburbFilterComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const materials = [
  MatFormFieldModule,
  MatSelectModule,
];

const modules = [
  CoreModule,
];

const libs = [
  StoreModule.forFeature(suburbFilterStateKey, suburbFilterReducer),
  EffectsModule.forFeature([SuburbFilterEffects]),

  I18nDirective,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class SuburbFilterModule { }
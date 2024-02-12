import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FilterAreaComponent } from 'ngx-cinlib/filters/filter-area';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { CoreModule } from 'src/app/core/core.module';
import { ContestFilterComponent } from './components/contest-filter.component';
import { ContestFilterTypesComponent } from './components/types/contest-filter-types.component';
import { contestFilterStateKey } from './constants/contest.filter.constants';
import { ContestFilterEffects } from './state/contest-filter.effects';
import { contestFilterReducer } from './state/contest-filter.reducer';


const components = [
  ContestFilterComponent,
  ContestFilterTypesComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatSelectModule,
];

const modules = [
  CoreModule,
];

const libs = [
  EffectsModule.forFeature([ContestFilterEffects]),
  StoreModule.forFeature(contestFilterStateKey, contestFilterReducer),

  FilterAreaComponent,
  I18nDirective,
  TranslatablePipe,
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
export class ContestFilterModule { }
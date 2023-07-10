import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { FilterAreaComponent } from '../filter-area/filter-area.component';
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
  FilterAreaComponent,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(contestFilterStateKey, contestFilterReducer),
  EffectsModule.forFeature([ContestFilterEffects]),
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
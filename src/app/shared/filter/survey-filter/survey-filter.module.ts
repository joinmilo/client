import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { DateRangeFilterComponent } from '../date-range-filter/date-range-filter.component';
import { FilterAreaComponent } from '../filter-area/filter-area.component';
import { SuburbFilterModule } from '../suburb-filter/suburb-filter.module';
import { SurveyFilterPastComponent } from './components/past/survey-filter-past.component';
import { SurveyFilterComponent } from './components/survey-filter.component';
import { surveyFilterStateKey } from './constants/survey-filter.constants';
import { SurveyFilterEffects } from './state/survey-filter.effects';
import { surveyFilterReducer } from './state/survey-filter.reducer';

const components = [
  SurveyFilterComponent,
  SurveyFilterPastComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatSelectModule,
];

const modules = [
  CoreModule,
  SuburbFilterModule,

  DateRangeFilterComponent,
  FilterAreaComponent,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(surveyFilterStateKey, surveyFilterReducer),
  EffectsModule.forFeature([SurveyFilterEffects]),
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
export class SurveyFilterModule { }
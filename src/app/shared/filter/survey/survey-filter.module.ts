import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DateRangeFilterComponent } from 'ngx-cinlib/filters/date-range';
import { FilterAreaComponent } from 'ngx-cinlib/filters/filter-area';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { CoreModule } from 'src/app/core/core.module';
import { SuburbFilterModule } from '../suburb/suburb-filter.module';
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
];

const libs = [
  StoreModule.forFeature(surveyFilterStateKey, surveyFilterReducer),
  EffectsModule.forFeature([SurveyFilterEffects]),

  DateRangeFilterComponent,
  FilterAreaComponent,
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
export class SurveyFilterModule { }